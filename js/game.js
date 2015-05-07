function Game(){
 this.board = [];
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
    if (board[r][i].status == 0){
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
  if(this.horizontalWin(r,c)){
    return true
    console.log("win!")
  }
}

Game.prototype.horizontalWin = function(r,c){
 var winState = [[-1,2,3],[1,2,3],[-3,-2,-1],[-2,-1,1]]
 var win = [];
 var board = this.board;
 var player = board[r][c].status;

 winState.forEach(function(state){
  var tilesStatus = []
  state.forEach(function(coordinate){
    if(board[r][c+coordinate].status == player){
      tilesStatus.push(1)
    }
  });
  if(tilesStatus.length == 3){
    win.push("win")
    console.log(win)
  }
 });

 console.log(win)

 if(win.includes("win")){
   console.log("yay")
   return true
 }

}

function Tile(){
  this.status = 0;
}

// test = new Game();
// test.createBoard();
// test.placePlayerPiece(3);
// test.placePlayerPiece(3, 2);
// console.log(test.board)