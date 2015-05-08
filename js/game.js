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

Game.prototype.placePlayerPiece = function(r, player){
  var board = this.board;
  var r = r.selector
  for (var i = 5; i >= 0; i--){
    if (board[r][i].status == 3){
      board[r][i].status = player.num;
      $("#r"+r+"_c"+i).addClass("player"+player.num)
      if (player.num == 1){
        player.num = 2
        this.win(r,i)
      }else {
        player.num = 1
        this.win(r,i)
      }
      break;
    }
  }
}

Game.prototype.win = function(r,c){
  var board = this.board;
  if(this.horizontalOrVerticalWin(r,c)){
    var winner = board[r][c].status;
    alert("Player "+winner+" is the winner!")
    return true
  }
}

Game.prototype.horizontalOrVerticalWin = function(r,c){
  var win = [];
  var that = this;
  var player = that.board[r][c].status;

  this.WIN_STATES.forEach(function(state){
   var tilesStatus = [];
   state.forEach(function(coordinate){
      if(that.horizontalWin(r,c,coordinate, player) || that.verticalWin(r,c,coordinate, player) ){
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

Game.prototype.horizontalWin = function(r,c,coordinate,player){
  var that = this;
  var status = false;
  if(that.inBounds(r,Number(c)+Number(coordinate))){
    if(that.board[Number(r)][Number(c)+Number(coordinate)].status == player){
      status = true;
    }
  }
  return status;
}

Game.prototype.verticalWin = function(r,c,coordinate,player){
  var that = this;
  var status = false;
  if(that.inBounds(Number(r)+Number(coordinate),Number(c))){
    if(that.board[Number(r)+Number(coordinate)][c].status == player){
      status = true;
    }
  }
  return status;
}

// Game.prototype.horizontalWin = function(r,c){
//  var win = [];
//  var that = this;
//  var player = that.board[r][c].status;

//  this.WIN_STATES.forEach(function(state){
//   var tilesStatus = [];
//   state.forEach(function(coordinate){
//     if(that.inBounds(r,c+coordinate)){
//       if(that.board[r][c+coordinate].status == player){
//         tilesStatus.push(1);
//       }
//     }
//   });
//   if(tilesStatus.length == 3){
//     win.push("win");
//   }
//  });

//  if(win.indexOf("win") == 0){
//    that.won = true;
//  }

//  return that.won;
// }

// Game.prototype.verticalWin = function(r,c){
//  var win = [];
//  var that = this;
//  var player = that.board[r][c].status;

//  this.WIN_STATES.forEach(function(state){
//   var tilesStatus = [];
//   state.forEach(function(coordinate){
//     if(that.inBounds(Number(r)+Number(coordinate),Number(c))){
//       if(that.board[Number(r)+Number(coordinate)][c].status == player){
//         tilesStatus.push(1);
//       }
//     }
//   });
//   if(tilesStatus.length == 3){
//     win.push("win");
//   }
//  });

//  if(win.indexOf("win") == 0){
//    that.won = true;
//  }

//  return that.won;
// }

Game.prototype.inBounds = function(r, c) {
 if(r >= 0 && r < 7){
  if(c >= 0 && c < 6){
    return true
  }
 }
}

function Tile(){
  this.status = 3;
}

// test = new Game();
// test.createBoard();
// test.placePlayerPiece(3);
// test.placePlayerPiece(3, 2);
// console.log(test.board)