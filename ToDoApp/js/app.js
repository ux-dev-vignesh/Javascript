var todoLists = [];

function addTeam() {
  var input = document.getElementById("input");

  if (input.value != "") {
    if (!checkTodo(input.value)) {
      todoLists.push(input.value);
      input.value = "";
      addTeamTable();
    } else {
      alert(`you already enter your team!`);
    }
  } else {
    alert(`enter your team 👕`);
  }
}

function addTeamTable() {
  let tableBody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let i = document.createElement("i");
  i.className = "fa-solid fa-medal";

  todoLists.map((val) => {
    td.innerHTML = `${val}`;
    td.append = i;
    tr.id = val;
    td.setAttribute("onclick", `deleteVal(${val})`);
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
  if (confirm(`are you sure to delete list 🙃`)) {
    var getIndex = todoLists.indexOf(val.id);
    todoLists.splice(getIndex, 1);
    document.getElementById(val.id).remove();
  }
}

function checkTodo(value) {
  if (todoLists.find((val) => val == value)) {
    return true;
  } else {
    return false;
  }
}

console.log(todoLists);
