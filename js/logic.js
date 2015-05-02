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

Game.prototype.placePlayerPiece = function(r){
  var board = this.board;
  var r = r.selector
  for (var i = 5; i >= 0; i--){
    if (board[r][i].status == 0){
      board[r][i].status = 1;
      $("#r"+r+"_c"+i).addClass("player1")
      break;
    }
  }
}

function Tile(){
  this.status = 0;
}

// test = new Game();
// test.createBoard();
// test.placePlayerPiece(3);
// console.log(test.board)