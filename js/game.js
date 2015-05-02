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
      board[r][i].status = 1;
      console.log(player.num)
      $("#r"+r+"_c"+i).addClass("player"+player.num)
      if (player.num == 1){
        player.num = 2
      }else {
        player.num = 1
      }
      break;
    }
  }
}

function Tile(){
  this.status = 0;
}

test = new Game();
test.createBoard();
test.placePlayerPiece(3);
// test.placePlayerPiece(3, 2);
// console.log(test.board)