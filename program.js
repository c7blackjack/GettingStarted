var dice = require(`./dice`);
var die = dice.game;


console.log(die);
die.size = 10;

for(var i =1; i < 10; i++){
  console.log(die.roll());
  die.count++;
}
 console.log("You rolled " + die.count + " times!")
