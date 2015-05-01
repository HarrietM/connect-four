function boardController(selector){
  this.selector = $(selector)
}

boardController.prototype.run = function(){
  var board = new Board(this.selector);
  board.load();
  board.selectTile();
}