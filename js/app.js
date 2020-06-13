"use strict";

function myFunction1() {
  var end = alert("it was nice to meet you " + person + " ,enjoy the website.");
  var finalscore = alert(sum);
  return [end, finalscore];
}

var person = prompt("Hello, whats your name?");
alert("Hello " + person + " my name is Zaid, welcome to my website!");

var sum = 0;
var arrayquestion = [
  "Am i above 25 years old? ,answer with Y or N",
  "Is the highest degree i have is a bachelors degree?",
  "do i live in Irbid?,answer with Y or N",
  "did i go to University of JUST?,answer with Y or N",
  "Can i play an instrument?,answer with Y or N",
];
for (var i = 0; i < arrayquestion.length; i++) {
  var userInput = prompt(arrayquestion[i].toUpperCase());
  condition(userInput);
  function condition(userInput) {
    while (userInput != "Y" && userInput != "N") {
      userInput = prompt(arrayquestion[i]).toUpperCase();
    }
    if (userInput == "Y") {
      sum++;
    }
    return userInput;
  }
}

function question6() {
  var q6 = prompt("how many strings does a guitar have?", "insert a number ");
  var i;
  for (i = 0; i <= 3; i++) {
    if (q6 > 6) {
      alert("lower");
      var q6 = prompt(
        "how many strings does a guitar have?",
        "insert a number "
      );
    } else if (q6 < 6) {
      alert("higher");
      var q6 = prompt(
        "how many strings does a guitar have?",
        "insert a number "
      );
    } else if (q6 == 6) {
      alert("correct! a guitar has 6 strings");
      sum = sum + 1;
      break;
    }
  }
}
question6();

var v = "|----|\n      |\n      |\n      |";
var p = 6;
var y = 0;
var x = "";

while (p > 0 && y < 6) {
  ask();
}

function ask() {
  var Q7 = prompt(
    "lets play hangman!\n1 word, 7 letters. its a place you know",
    "guess  letter"
  );
  var q7 = Q7.toLowerCase();

  if (
    q7 == "l" ||
    q7 == "u" ||
    q7 == "m" ||
    q7 == "i" ||
    q7 == "n" ||
    q7 == "s"
  ) {
    p = p - 1;
    progress();
    alert("correct " + x + " \n" + v);
  } else {
    y = y + 1;
    INCORRECT(y);
  }
}

function progress() {
  x = p + " letters left";

  return x;
}

function INCORRECT(y) {
  drawing(y);
  alert("incorrect " + " \n" + v);
}

function drawing(y) {
  console.log(y);
  console.log(v);

  if (y == 1) {
    v = "|----|\nO    |\n       |\n       |";
  } else if (y == 2) {
    v = "|----|\nO    |\n/     |\n      |";
  } else if (y == 3) {
    v = "|----|\nO    |\n/|    |\n      |";
  } else if (y == 4) {
    v = "|----|\nO    |\n/|\\   |\n     |";
  } else if (y == 5) {
    v = "|----|\nO    |\n/|\\   |\n/     |";
  } else if (y == 6) {
    v = "|----|\nO    |\n/|\\   |\n/ \\   |";
  }

  return v;
}

if (p < 1) {
  alert("you won, the answer is lumnius");
  sum = sum + 1;
} else if ((y = 6)) {
  alert("you lost, the answer is luminus");
}
alert(" your grade is " + sum + " out of 7");
