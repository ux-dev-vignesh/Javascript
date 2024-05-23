"use strict";

var colors = genarateRandomColor(6); // display rgb

var pickedColor = pickcolor();
var colorDisplay = document.getElementById("color");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var header = document.getElementById("header");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.onclick = function () {
  colors = genarateRandomColor(3);

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
};

reset.textContent = "reset";
reset.addEventListener("click", function () {
  colors = genarateRandomColor(6);
  pickedColor = pickcolor();
  header.style.background = "#000";
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});
colorDisplay.textContent = pickedColor; // get all squers

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]; // add event

  squares[i].addEventListener("click", function () {
    var pickedBackground = this.style.background; // checking condition

    if (pickedBackground === pickedColor) {
      messageDisplay.textContent = "correct!";
      changeColors(pickedColor);
      header.style.background = pickedBackground;
      reset.textContent = "Play Again?";
    } else {
      this.style.background = "#fff";
      messageDisplay.textContent = "Try Again";
    }
  });
} // function change colors


function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
} // pickcolor


function pickcolor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
} // genarate random color


function genarateRandomColor(num) {
  // create array
  var array = []; // logic

  for (var i = 0; i < num; i++) {
    array.push(randomColor());
  } // return array


  return array;
} // random color function


function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  return rgb;
}