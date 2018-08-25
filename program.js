
var die = {
  size : 6,
  count: 1,
  roll: function(){
    var dieRoll = Math.ceil(die.size * Math.random());
    return dieRoll;
  }
}

die.size = 10;
for(var i =0; i < 10; i++){
  console.log(die.roll());
  die.count++;
}
