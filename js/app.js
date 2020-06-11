"use strict";
// lab2;
// var sum = 0;
// var person = prompt("Hello, whats your name?");
// alert("Hello " + person + " my name is Zaid, welcome to my website!");

// var q1 = prompt("Am i above 25 years old?", "answer with Y or N");
// var Q1 = q1.toUpperCase();
// if (Q1 == "Y") {
//   //console.log("correct! i'm 26 years old")
//   alert("correct! i'm 26 years old");
//   sum = sum + 1;
// } else {
//   //console.log("incorrect, i'm 26 years old")
//   alert("incorrect, i'm 26 years old");
// }

// var q2 = prompt(
//   "Is the highest degree i have is a bachelors degree?",
//   "answer with Y or N"
// );
// var Q2 = q2.toUpperCase();

// if (Q2 == "Y") {
//   //console.log("correct! i have a bachelors degree in engineering ")
//   alert("correct! i have a bachelors degree in engineering ");
//   sum = sum + 1;
// } else {
//   //console.log("incorrect, i have a bachelors degree in engineering ")
//   alert("incorrect, i have a bachelors degree in engineering ");
// }

// var q3 = prompt("do i live in Amman?", "answer with Y or N");
// var Q3 = q3.toUpperCase();
// if (Q3 == "N") {
//   //console.log("correct! i live in Irbid ")
//   alert("correct! i live in Irbid ");
//   sum = sum + 1;
// } else {
//   //console.log("incorrect, i live in Irbid ")
//   alert("incorrect, i live in Irbid ");
// }

// var q4 = prompt("did i go to University of Jordan?", "answer with Y or N");
// var Q4 = q4.toUpperCase();
// if (Q4 == "N") {
//   //console.log("correct! i went to JUST ")
//   alert("correct! i went to JUST ");
//   sum = sum + 1;
// } else {
//   //console.log("incorrect, i went to JUST ")
//   alert("incorrect, i went to JUST ");
// }

// var q5 = prompt("Can i play an instrument?", "answer with Y or N");
// var Q5 = q5.toUpperCase();
// if (Q5 == "Y") {
//   //console.log("correct! i play the guitar ")
//   alert("correct! i play the guitar ");
//   sum = sum + 1;
// } else {
//   //console.log("incorrect, i play the guitar ")
//   alert("incorrect, i play the guitar ");
// }
//lab3

// var q6 = prompt("how many strings does a guitar have?", "insert a number ");
// var i;
// for (i = 0; i <= 3; i++) {
//   if (q6 > 6) {
//     alert("lower");
//     var q6 = prompt("how many strings does a guitar have?", "insert a number ");
//   } else if (q6 < 6) {
//     alert("higher");
//     var q6 = prompt("how many strings does a guitar have?", "insert a number ");
//   } else if (q6 == 6) {
//     alert("correct! a guitar has 6 strings");
//     sum = sum + 1;
//   }
// }

//lab3

// myFunction1();
// var end = alert("it was nice to meet you " + person + " ,enjoy the website.");
// alert(sum);

// var person = prompt("Hello, whats your name?");
// alert("Hello " + person + " my name is Zaid, welcome to my website!");

// var sum = 0; //mentioned
// var arrayquestion = [
//   "Am i above 25 years old? ,answer with Y or N",
//   "Is the highest degree i have is a bachelors degree?",
//   "do i live in Irbid?,answer with Y or N",
//   "did i go to University of JUST?,answer with Y or N",
//   "Can i play an instrument?,answer with Y or N",
// ];
// for (var i = 0; i < arrayquestion.length; i++) {
//   var userInput = prompt(arrayquestion[i].toUpperCase());
//   condition(userInput);
//   function condition(userInput) {
//     //userInput = x
//     while (userInput != "Y" && userInput != "N") {
//       userInput = prompt(arrayquestion[i]).toUpperCase();
//     }
//     if (userInput == "Y") {
//       sum++;
//     }
//     return userInput;
//   }
// }

// function question6() {
//   var q6 = prompt("how many strings does a guitar have?", "insert a number ");
//   var i;
//   for (i = 0; i <= 3; i++) {
//     if (q6 > 6) {
//       alert("lower");
//       var q6 = prompt(
//         "how many strings does a guitar have?",
//         "insert a number "
//       );
//     } else if (q6 < 6) {
//       alert("higher");
//       var q6 = prompt(
//         "how many strings does a guitar have?",
//         "insert a number "
//       );
//     } else if (q6 == 6) {
//       alert("correct! a guitar has 6 strings");
//       sum = sum + 1;
//       break;
//     }
//   }
// }
// question6();
// alert(" your grade is " + sum + " out of 7");

// drawings:
// alert("|----|\nO    |\n/|\\   |\n/ \\   |"); //final
// function drawing(x, x1, x2, x3, x4, x5, x6, o) {
//   var o = alert("|----|\n      |\n      |\n      |"); //start
//   var x1 = alert("|----|\nO    |\n       |\n       |"); //1st
//   var x2 = alert("|----|\nO    |\n/     |\n      |"); //2nd
//   var x3 = alert("|----|\nO    |\n/|    |\n      |"); //3rd
//   var x4 = alert("|----|\nO    |\n/|\\   |\n     |"); //4rth
//   var x5 = alert("|----|\nO    |\n/|\\   |\n/     |"); //5th
//   var x6 = alert("|----|\nO    |\n/|\\   |\n/ \\   |"); //6th(final)
// }
// var ans = ["L", "U", "M", "I", "N", "U", "S"];

// var x = "lets play hangman";
// function hangman() {
//   for (var i = 0; i < 7; ) {
//     var x;
//     if ((i = 0)) {
//       x = alert("|----|\n      |\n      |\n      |");
//     } else if ((i = 1)) {
//       x = alert("|----|\nO    |\n       |\n       |");
//     } else if ((i = 2)) {
//       x = alert("|----|\nO    |\n/     |\n      |");
//     } else if ((i = 3)) {
//       x = alert("|----|\nO    |\n/|    |\n      |");
//     } else if ((i = 4)) {
//       x = alert("|----|\nO    |\n/|\\   |\n     |");
//     } else if ((i = 5)) {
//       x = alert("|----|\nO    |\n/|\\   |\n/     |");
//     } else if ((i = 6)) {
//       x = alert("|----|\nO    |\n/|\\   |\n/ \\   |");
//     }
//   }
//   return x;
// }

// hangman();

// function q7(ans) {
//   // hungman();
//   if (
//     ans == "l" ||
//     ans == "u" ||
//     ans == "m" ||
//     ans == "i" ||
//     ans == "n" ||
//     ans == "s"
//   ) {
//     alert("correct!");
//     x;
//   } else {
//     alert(incorrect);
//     x;
//     i++;
//   }
//   return ans;
// }

// for (var i= 0 ; i > 7){
//   hungman();
//   ans()
//   x

// }

// "l" && "u" && "m" && "i" && "n" && "s"
// l || u || m || i || n || s
// "_ _ _ _ _ _ _"
var v = ""; //drawing alerted
var p = 6; //letters left
var y = 0; //number of wrong answers
var x = ""; //

var q7 = prompt(
  "lets play hangman!\n1 word, 7 letters. its a place you know",
  "guess a letter"
);
// .toLowerCase();
while (p > 0 && y < 6) {
  ask();
}
//this function increases the progress and alerts the user with the result
function ask() {
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
    alert("correct", x);

    CORRECT();
  } else {
    y = y + 1;
    INCORRECT();
  }
}
// this function keeps asking the player the question until they guess all the letters
function CORRECT() {
  while (0 < p && p < 8) {
    ask();
    break;
  }
}

//this function assigns to x the number of letters left to win
function progress() {
  while (0 < p < 7) {
    x = (p, " letters left");
    return x;
  }
}
// this function increases the counter for number of incorrect answer and alerts the player with a drawing
function INCORRECT() {
  while (y <= 6) {
    drawing(y);
    alert(v);

    break;
  }
}

//this function gives a new drawing each time you make a mistake
function drawing() {
  if ((y = 1)) {
    v = "|----|\nO    |\n       |\n       |";
  } //1st
  else if ((y = 2)) {
    v = "|----|\nO    |\n/     |\n      |";
  } //2nd
  else if ((y = 3)) {
    v = "|----|\nO    |\n/|    |\n      |";
  } //3rd
  else if ((y = 4)) {
    v = "|----|\nO    |\n/|\\   |\n     |";
  } //4rth
  else if ((y = 5)) {
    v = "|----|\nO    |\n/|\\   |\n/     |";
  } //5th
  else if ((y = 6)) {
    v = "|----|\nO    |\n/|\\   |\n/ \\   |";
  } //6th

  return v;
}
//result
if (x < 1) {
  alert("you won, the answer is lumnius");
} else if ((y = 6)) {
  alert("you lost, the answer is luminus");
}
