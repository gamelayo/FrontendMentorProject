function display(value) {
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}
function calculate() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}
function del() {
  var d = document.getElementById("result").value;
  document.getElementById("result").value = d.slice(0, -1);
}

var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    var sheets = document.getElementById("theme");
    if (index == 0) {
      sheets.href = "css/first.css";
    } else if (index == 1) {
      sheets.href = "css/second.css";
    } else {
      sheets.href = "css/third.css";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
