"use strict";
var sum = 0;
var person = prompt("Hello, whats your name?");
alert("Hello " + person + " my name is Zaid, welcome to my website!");

var q1 = prompt("Am i above 25 years old?", "answer with Y or N");
var Q1 = q1.toUpperCase();
if (Q1 == "Y") {
  //console.log("correct! i'm 26 years old")
  alert("correct! i'm 26 years old");
  sum = sum + 1;
} else {
  //console.log("incorrect, i'm 26 years old")
  alert("incorrect, i'm 26 years old");
}

var q2 = prompt(
  "Is the highest degree i have is a bachelors degree?",
  "answer with Y or N"
);
var Q2 = q2.toUpperCase();

if (Q2 == "Y") {
  //console.log("correct! i have a bachelors degree in engineering ")
  alert("correct! i have a bachelors degree in engineering ");
  sum = sum + 1;
} else {
  //console.log("incorrect, i have a bachelors degree in engineering ")
  alert("incorrect, i have a bachelors degree in engineering ");
}

var q3 = prompt("do i live in Amman?", "answer with Y or N");
var Q3 = q3.toUpperCase();
if (Q3 == "N") {
  //console.log("correct! i live in Irbid ")
  alert("correct! i live in Irbid ");
  sum = sum + 1;
} else {
  //console.log("incorrect, i live in Irbid ")
  alert("incorrect, i live in Irbid ");
}

var q4 = prompt("did i go to University of Jordan?", "answer with Y or N");
var Q4 = q4.toUpperCase();
if (Q4 == "N") {
  //console.log("correct! i went to JUST ")
  alert("correct! i went to JUST ");
  sum = sum + 1;
} else {
  //console.log("incorrect, i went to JUST ")
  alert("incorrect, i went to JUST ");
}

var q5 = prompt("Can i play an instrument?", "answer with Y or N");
var Q5 = q5.toUpperCase();
if (Q5 == "Y") {
  //console.log("correct! i play the guitar ")
  alert("correct! i play the guitar ");
  sum = sum + 1;
} else {
  //console.log("incorrect, i play the guitar ")
  alert("incorrect, i play the guitar ");
}
var q6 = prompt("how many strings does a guitar have?", "insert a number ");
var i;
for (i = 0; i < 3; i++) {
  if (q6 > 6) {
    alert("lower");
    var q6 = prompt("how many strings does a guitar have?", "insert a number ");
  } else if (q6 < 6) {
    alert("higher");
    var q6 = prompt("how many strings does a guitar have?", "insert a number ");
  } else if (q6 == 6) {
    alert("correct! a guitar has 6 strings");
    sum = sum + 1;
  }
}

// alert("|----|\nO    |\n/|\\   |\n/ \\   |"); //final
// var o = alert("|----|\n      |\n      |\n      |"); //start
// var x1 = alert("|----|\nO    |\n       |\n       |"); //1st
// var x2 = alert("|----|\nO    |\n/     |\n      |"); //2nd
// var x3 = alert("|----|\nO    |\n/|    |\n      |"); //3rd
// var x4 = alert("|----|\nO    |\n/|\\   |\n     |"); //4rth
// var x5 = alert("|----|\nO    |\n/|\\   |\n/     |"); //5th
// var x6 = alert("|----|\nO    |\n/|\\   |\n/ \\   |"); //6th

//var ans = ["L","U","M","I","N","U","S"]

//var x = alert("|----|\n      |\n      |\n      |");
// var game = prompt(
//   "A place you know. 1 word 7 letters. What is it?",
//   "insert letter"
//);
var game;
var x;
alert("|----|\nO    |\n/|\\   |\n/ \\   |\n lets play hangman!"); //final
for (var i = 0; i < 6; ) {
  var game = prompt(
    "A place you know. 1 word 7 letters. What is it?",
    "insert letter"
  );
  // if (game != "L" || "U" || "M" || "I" || "N" || "S") {
  //   alert("correct!");
  //   myFunction1();
  //   game;}
  if (game == "L") {
    alert("correct!");
    myFunction1();
  } else if (game == "U") {
    alert("correct!");
    myFunction1();
  } else if (game == "M") {
    alert("correct!");
    myFunction1();
  } else if (game == "I") {
    alert("correct!");
    myFunction1();
  } else if (game == "N") {
    alert("correct!");
    myFunction1();
  } else if (game == "S") {
    alert("correct!");
    myFunction1();
  } else if (game != "L" || "U" || "M" || "I" || "N" || "S") {
    alert("incorrect");
    i = i++;
    myFunction1();
  }
}

function myFunction1() {
  var ;
  if ((i = 0)) {
    var x = "|----|\n      |\n      |\n      |";
  } else if ((i = 1)) {
    var x = "|----|\nO    |\n       |\n       |";
  } else if ((i = 2)) {
    var x = "|----|\nO    |\n/     |\n      |";
  } else if ((i = 3)) {
    var x = "|----|\nO    |\n/|    |\n      |";
  } else if ((i = 4)) {
    var x = "|----|\nO    |\n/|\\   |\n     |";
  } else if ((i = 5)) {
    var x = "|----|\nO    |\n/|\\   |\n/     |";
  } else if ((i = 6)) {
    var x = "|----|\nO    |\n/|\\   |\n/ \\   |";
  }
  
  return x;
  
}

myFunction1();
var end = alert("it was nice to meet you " + person + " ,enjoy the website.");
alert(sum);
