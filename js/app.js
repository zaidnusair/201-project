"use strict";
var person = prompt("Hello, whats your name?");
alert("Hello " + person + " my name is Zaid, welcome to my website!");

var q1 = prompt("Am i above 25 years old?", "answer with Y or N");
var Q1 = q1.toUpperCase();
if (Q1 == "Y") {
  //console.log("correct! i'm 26 years old")
  alert("correct! i'm 26 years old");
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
} else {
  //console.log("incorrect, i have a bachelors degree in engineering ")
  alert("incorrect, i have a bachelors degree in engineering ");
}

var q3 = prompt("do i live in Amman?", "answer with Y or N");
var Q3 = q3.toUpperCase();
if (Q3 == "N") {
  //console.log("correct! i live in Irbid ")
  alert("correct! i live in Irbid ");
} else {
  //console.log("incorrect, i live in Irbid ")
  alert("incorrect, i live in Irbid ");
}

var q4 = prompt("did i go to University of Jordan?", "answer with Y or N");
var Q4 = q4.toUpperCase();
if (Q4 == "N") {
  //console.log("correct! i went to JUST ")
  alert("correct! i went to JUST ");
} else {
  //console.log("incorrect, i went to JUST ")
  alert("incorrect, i went to JUST ");
}

var q5 = prompt("Can i play an instrument?", "answer with Y or N");
var Q5 = q5.toUpperCase();
if (Q5 == "Y") {
  //console.log("correct! i play the guitar ")
  alert("correct! i play the guitar ");
} else {
  //console.log("incorrect, i play the guitar ")
  alert("incorrect, i play the guitar ");
}

var end = alert("it was nice to meet you " + person + " ,enjoy the website.");
