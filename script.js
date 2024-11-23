const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  display.value = eval(display.value);
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function allClear() {
  display.value = "";
}