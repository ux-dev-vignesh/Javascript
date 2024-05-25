"use strict";

var todoLists = [];

function addTeam() {
  var input = document.getElementById("input");

  if (input.value != "") {
    if (!checkTodo(input.value)) {
      todoLists.push(input.value);
      input.value = "";
      addTeamTable();
    } else {
      alert("you already enter your team!");
    }
  } else {
    alert("enter your team \uD83D\uDC55");
  }
}

function addTeamTable() {
  var tableBody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var i = document.createElement("i");
  i.className = "fa-solid fa-medal";
  todoLists.map(function (val) {
    td.innerHTML = "".concat(val);
    td.append = i;
    tr.id = val;
    td.setAttribute("onclick", "deleteVal(".concat(val, ")"));

    if (td.innerText == "csk" || td.innerText == "CSK") {
      td.style.backgroundColor = "#F9CD05";
    }

    if (td.innerText == "mumbai" || td.innerText == "MUMBAI") {
      td.style.backgroundColor = "#004B8D";
    }
  });
  tr.append(td);
  tableBody.append(tr);
}

function deleteVal(val) {
  if (confirm("are you sure to delete list \uD83D\uDE43")) {
    var getIndex = todoLists.indexOf(val.id);
    todoLists.splice(getIndex, 1);
    document.getElementById(val.id).remove();
  }
}

function checkTodo(value) {
  if (todoLists.find(function (val) {
    return val == value;
  })) {
    return true;
  } else {
    return false;
  }
}

console.log(todoLists);