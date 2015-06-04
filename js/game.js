function Game(){
 this.board = [];
 this.WIN_STATES = [[-1,1,2],[1,2,3],[-3,-2,-1],[-2,-1,1]];
 this.won = false;
}

Game.prototype.createBoard = function(){
  for (var r = 0; r < 6; r++){
    this.board.push([]);
    for (var c = 0; c < 7; c++){
      this.board[r].push(new Tile());
    }
  }
  // transpose board
  var board = this.board;
  this.board = board[0].map(function(c, i){
    return board.map(function(r){
      return r[i];
    });
  });
}

Game.prototype.placePlayerPiece = function(r, player, view){
  var board = this.board;
  var r = r.selector
  for (var i = 5; i >= 0; i--){
    if (board[r][i].status == 0){
      board[r][i].status = player.num;
      view.tileID(r, i, player.num)
      if (player.num == 1){
        player.num = 2
      }else {
        player.num = 1
      }
      this.win(r,i,view)
      break;
    }
  }
}

Game.prototype.win = function(r,c,view){
  var board = this.board;
  if(this.checkForHorizontalorVerticalWin(r,c) || this.checkforDiagonalWin(r,c) || this.checkforSecondaryDiagonalWin(r,c)){
    var winner = board[r][c].status;
    view.win(winner)
  }
}

Game.prototype.checkForHorizontalorVerticalWin = function(r,c){
  var win = [];
  var that = this;
  var player = that.board[r][c].status;

  this.WIN_STATES.forEach(function(state){
   var tilesStatus = [];
   state.forEach(function(coordinate){
      if(that.horizontalWin(r,c,coordinate, player) || that.verticalWin(r,c,coordinate, player)){
        tilesStatus.push(1);
      }
    });
   if(tilesStatus.length == 3){
     win.push("win");
   }
  });

  if(win.indexOf("win") == 0){
    that.won = true;
  }

  return that.won;
}

Game.prototype.checkforDiagonalWin = function(r,c){
  var win = [];
  var that = this;
  var player = that.board[r][c].status;

  this.WIN_STATES.forEach(function(state){
   var tilesStatus = [];
   state.forEach(function(coordinate){
      if(that.diagonalWin(r,c,coordinate,player)){
        tilesStatus.push(1);
      }
    });
   if(tilesStatus.length == 3){
     win.push("win");
   }
  });

  if(win.indexOf("win") == 0){
    that.won = true;
  }

  return that.won;
}

Game.prototype.checkforSecondaryDiagonalWin = function(r,c){
  var win = [];
  var that = this;
  var player = that.board[r][c].status;
  var winstates = [[[-1,1,2],[1,2,3],[-3,-2,-1],[-2,-1,1]]];

  this.WIN_STATES.forEach(function(state){
   var tilesStatus = [];
   state.forEach(function(coordinate){
      if(that.secondaryDiagonalWin(r,c,coordinate,player)){
        tilesStatus.push(1);
      }
    });
   if(tilesStatus.length == 3){
     win.push("win");
   }
  });

  if(win.indexOf("win") == 0){
    that.won = true;
  }

  return that.won;
}

Game.prototype.diagonalWin = function(r,c,coordinate,player) {
  var row = Number(r)+Number(coordinate);
  var column = Number(c)+Number(coordinate);
  return this.check(row,column,player)
}

Game.prototype.secondaryDiagonalWin = function(r,c,coordinate,player){
  var row = (Number(r)+Number(coordinate));
  var column = (Number(c)-(Number(coordinate)));
  return this.check(row,column,player)
}

Game.prototype.horizontalWin = function(r,c,coordinate,player){
  var row = Number(r);
  var column = Number(c) + Number(coordinate);
  return this.check(row,column,player)
}

Game.prototype.verticalWin = function(r,c,coordinate,player){
  var row = Number(r) + Number(coordinate);
  var column = Number(c)
  return this.check(row, column, player)
}

Game.prototype.check = function(row,column,player){
  var that = this;
  var status = false;
  if(that.inBounds(row,column)){
    if(that.board[row][column].status == player){
      status = true
    }
  }
  return status
}

Game.prototype.inBounds = function(r, c) {
 if(r >= 0 && r < 7){
  if(c >= 0 && c < 6){
    return true
  }
 }
}