var clickBtn = document.getElementById("input-btn");

var inputBox = document.getElementById("input-box");

var foodItems = document.getElementById("foodItems");

// function for on click
var count = 0;
function addElement() {
  // for checking
  if (inputBox.value !== "") {
    let li = document.createElement("li");

    li.id = "menu" + count;

    let div1 = document.createElement("div");

    let span = document.createElement("span");

    span.id = "menu" + count;

    let i = document.createElement("i");

    i.className = "fas fa-xmark close";

    span.onclick = function () {
      remove(this.id);
    };

    // i.id = "menu" + count;

    span.append(i);

    li.className = "fooditem";

    // add value for li

    div1.append(inputBox.value);
    li.append(div1);
    li.append(span);
    count++;

    // adding li to ul

    foodItems.appendChild(li);

    inputBox.value = "";
  } else {
    alert("plese enter a food!");
  }
}

function remove(data) {
  document.getElementById(data).remove();
}
