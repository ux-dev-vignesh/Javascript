function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function randomRow() {
  const para1 = randomColor();
  const para2 = randomColor();
  const para3 = randomColor();
  return { para1, para2, para3 };
}
function displayValue() {
  let parent = document.getElementById("colorPicker");
  let colorLists = [];
  for (i = 0; i < 10; i++) {
    colorLists.push(randomRow());
  }
  colorLists.map((color) => {
    var val = Object.values(color);
    var randomAns = Math.floor(Math.random() * 3);
    let div = document.createElement("div");
    let ans = document.createElement("h5");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
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
let count = 0;
$("p").click(function () {
  let clickId = $(this).attr("id");
  let crtAns = $(this).parent().find("h5").html();
  if (clickId === crtAns) {
    $(this)
      .parent()
      .fadeOut("slow", () => {
        $(this).parent().remove();
      });
    $("#valueCorrection")
      .html("This is a correct answer")
      .css("color", "green");
    count += 1;
    console.log(count);
  } else {
    $(this).parent().fadeOut("slow");
    $("#valueCorrection").html("This is a wrong answer").css("color", "red");
    $("#valueCorrection").html("This is a wrong answer").css("color", "red");
  }
});
function checkValue() {
  const condition = $("#colorPicker").find("div");
  console.log(condition);
  if (true) {
    $("#colorPicker").find("div").removeAttr("style");
    $("#percentage").append(": ", count * 10, "%");
  } else {
    console.log("false");
  }
}
