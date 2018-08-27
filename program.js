var dice = require("./dice.js");
var die = dice.die;

console.log(die);
//die.size = 10;

for(var i =1; i < 10; i++){
  console.log(die.roll());
  die.count++;
}
 console.log("You rolled " + die.count + " times!")
