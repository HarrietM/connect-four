function boardController(selector){
  this.selector = $(selector);
}

boardController.prototype.run = function(){
  var board = new Board(this.selector);
  var game = new Game();
  var player = new Player();
  console.log(this.player)
  // var player1 = new Player(this.selector, 1);
  // var player2 = new Player(this.selector, 2);
  board.load();
  game.createBoard();
  board.selectColumn(game, player);
  // while loop player 1 + player 2 until a player = win
  // board.play(player1);
  // board.selectTile();
  // player2.selectTile();

}