var readlineSync = require('readline-sync');

var score=0;
var userName = readlineSync.question("Hey what's up what's your name ");

console.log("Welcome " + userName + " Lets Check Your Knowledge Of MCU");
console.log("----------------------------------")
var highscores=[{
  name:"Samarjeet",
  score:7,
}];

function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong");
  }
  console.log("Current Score:",score)
  console.log("----------------------------------")
}

var question = [{
  question:"How many Infinity Stones are there?: ",
  answer:"Six"
},{
  question:"Where is Captain America from?: ",
  answer:"Brooklyn"
},{
  question:"Who is Tony Stark’s father?: ",
  answer:"Howard Stark"
},{
  question:"Sharon Carter is whose great-niece?: ",
  answer:"Peggy Carter"
},{
  question:"Who was able to pick up Thor’s hammer in Endgame?: ",
  answer:"Captain America"
},{
  question:"In which movie did Spider-Man make his first appearance in the MCU?: ",
  answer:"Captain America: Civil War"
},{
  question:"Who rescued Tony Stark and Nebula from space?: ",
  answer:"Captain Marvel"
}];

for(var i=0;i<question.length;i++){
  var currentQuestion=question[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YOU SCORED: ",score)
console.log("----------------------------------")

console.log("CHECK OUT HIGH SCORES:")

var highscores
for(var i=0;i<highscores.length; i++){
  var highscores=highscores[i];
  console.log(highscores.name);
  console.log(highscores.score);
  console.log("----------------------------------")
}


  