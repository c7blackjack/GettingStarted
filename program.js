
var die = {
  size : 6,
  count: 1,
  roll: function(){
    var dieRoll = Math.ceil(die.size * Math.random());
    return dieRoll;
  }
}

console.log(die.size);

console.log(die.roll());
