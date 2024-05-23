"use strict";

var clickBtn = document.getElementById("input-btn");
var inputBox = document.getElementById("input-box");
var foodItems = document.getElementById("foodItems"); // function for on click

var count = 0;

function addElement() {
  // for checking
  if (inputBox.value !== "") {
    var li = document.createElement("li");
    li.id = "menu" + count;
    var div1 = document.createElement("div");
    var span = document.createElement("span");
    span.id = "menu" + count;
    var i = document.createElement("i");
    i.className = "fas fa-xmark close";

    span.onclick = function () {
      remove(this.id);
    }; // i.id = "menu" + count;


    span.append(i);
    li.className = "fooditem"; // add value for li

    div1.append(inputBox.value);
    li.append(div1);
    li.append(span);
    count++; // adding li to ul

    foodItems.appendChild(li);
    inputBox.value = "";
  } else {
    alert("plese enter a food!");
  }
}

function remove(data) {
  document.getElementById(data).remove();
}