function Board(selector){
  this.selector = selector;
}

Board.prototype.load = function(){

  $(this.selector).append("<div class='board'></div>");

  for (var i = 0; i < 7; i++){
    var columnButton = "<div class='column-button' id="+i+"></div>";
    $(".board").append(columnButton);
  }

  for (var c = 0; c < 6; c++){
    for (var r = 0; r < 7; r++){
      var tile = "<div class='tile' id=r"+r+"_c"+c+"></div>"
      $(".board").append(tile);
    }
  }
}

Board.prototype.selectColumn = function(game, player) {
  $(this.selector).on("click", ".column-button", function(e){
    e.preventDefault();
    game.placePlayerPiece($(e.target.id), player);
  });
}

// Board.prototype.play = function(player1){
//   var p1 = player1;
//   if (p1.turn == true ){
//     player1.selectTile(1);
//   }else {
//     alert("player2!")
//   }

// }


// Board.prototype.gameOver = function(){
//   return false
// }
