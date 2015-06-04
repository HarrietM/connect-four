function ReGame(){
  this.board = this.createBoard();
  this.WIN_STATES = [[-1,1,2],[1,2,3],[-3,-2,-1],[-2,-1,1]];
  this.DIAG_WIN_STATES = [[1,2,3],[1,1,2]];
}

ReGame.prototype.createBoard = function(){
  var board = [];
  for(var r = 0; r <6; r ++){
    board.push([]);
    for(var c = 0; c < 7; c++){
      this.board[r].push(new Tile());
    }
  }
  // transpose board
  board = board[0].map(function(c, i){
    return board.map(function(r){
      return r[i];
    })
  });

  return board
}

ReGame.prototype.placePlayerPiece = function(r, player){
  var board = this.board;
  var r = r.selector
  for (var i = 5; i >= 0; i--){
    if (board[r][i].status == 0){
      board[r][i].status = player.num;
      $("#r"+r+"_c"+i).addClass("player"+player.num)
      if (player.num == 1){
        player.num = 2
      }else {
        player.num = 1
      }
      this.win(r,i)
      break;
    }
  }
}

ReGame.prototype.win = function(r,c) {
  var board = this.board;
  var r = Number(r);
  var c = Number(c);
  if(){
    var
  }
}