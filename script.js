const display = document.getElementById("display");
const calculation = document.querySelector(".calculation");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector("#clear");

function tap() {
  const audio = new Audio("audios/tap-output.mp3");
  audio.play();
}

for (let button of buttons) {
  if (button.id !== "clear") {
    button.addEventListener("click", tap);
  }
}

function clearTap() {
  const audio = new Audio("audios/eraseTap-output.mp3");
  audio.play();
}

clear.addEventListener("click", clearTap);

function appendToDisplay(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value += input;
  }
}

function calculate() {
  if (display.value === "" || display.value === "0") {
    display.value = 0;
    calculation.textContent = "";
  } else {
    try {
      const result = eval(display.value);
      calculation.textContent = display.value;
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  }
}

function clearLast() {
  display.value = display.value.slice(0, -1);
  calculation.textContent = "";
}

function allClear() {
  display.value = "";
  calculation.textContent = "";
}
