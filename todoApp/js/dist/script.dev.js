"use strict";

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}

function randomRow() {
  var para1 = randomColor();
  var para2 = randomColor();
  var para3 = randomColor();
  return {
    para1: para1,
    para2: para2,
    para3: para3
  };
}

function displayValue() {
  var parent = document.getElementById("colorPicker");
  var colorLists = [];

  for (i = 0; i < 10; i++) {
    colorLists.push(randomRow());
  }

  colorLists.map(function (color) {
    var val = Object.values(color);
    var randomAns = Math.floor(Math.random() * 3);
    var div = document.createElement("div");
    var ans = document.createElement("h5");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    ans.innerHTML = val[randomAns];
    para1.style.backgroundColor = color.para1;
    para1.id = color.para1;
    para2.style.backgroundColor = color.para2;
    para2.id = color.para2;
    para3.style.backgroundColor = color.para3;
    para3.id = color.para3;
    div.appendChild(ans);
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    parent.appendChild(div);
  });
}

displayValue();
var count = 0;
$("p").click(function () {
  var _this = this;

  var clickId = $(this).attr("id");
  var crtAns = $(this).parent().find("h5").html();

  if (clickId === crtAns) {
    $(this).parent().fadeOut("slow", function () {
      $(_this).parent().remove();
    });
    $("#valueCorrection").html("This is a correct answer").css("color", "green");
    count += 1;
    console.log(count);
  } else {
    $(this).parent().fadeOut("slow");
    $("#valueCorrection").html("This is a wrong answer").css("color", "red");
    $("#valueCorrection").html("This is a wrong answer").css("color", "red");
  }
});

function checkValue() {
  var condition = $("#colorPicker").find("div");
  console.log(condition);

  if (true) {
    $("#colorPicker").find("div").removeAttr("style");
    $("#percentage").append(": ", count * 10, "%");
  } else {
    console.log("false");
  }
}