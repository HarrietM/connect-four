function Player(selector, id){
  this.selector = selector;
  this.id = id;
  this.turn = true;
  this.num = 1
  var playerId = this.id;
}

Player.prototype.selectTile = function(id){
  $(this.selector).on("click", ".tile", function(e){
    e.preventDefault();
    $(e.target).addClass("player"+id);
  });
}