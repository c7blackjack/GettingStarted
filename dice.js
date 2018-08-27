
var die = {
  size : 6,
  count: 1,
  roll: function(){
    var dieRoll = Math.ceil(this.size * Math.random());
    return dieRoll;
  }
};

exports.game = die;
