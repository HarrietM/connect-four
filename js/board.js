function Board(selector){
  this.selector = selector;
}

Board.prototype.load = function(){
  var tileCounter = 0;
  $(this.selector).append("<div class='board'></div>");
  for (var i = 0; i < 42; i++){
    tileCounter++;
    var uniqueCounter = tileCounter;
    var tile = "<div class='tile' id="+uniqueCounter+"></div>";
    $(".board").append(tile);
  }
}

Board.prototype.selectTile = function() {
  $(this.selector).on("click", ".tile", function(e){
    e.preventDefault();
    $(e.target).addClass("player1")
  });
}