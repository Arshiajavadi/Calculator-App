//Get all elements
const display = document.getElementById("display");
const calculation = document.querySelector(".calculation");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector("#clear");

//Function to play tap sound
function tap() {
  const audio = new Audio("audios/tap-output.mp3");
  audio.play();
}

//Add click event to all buttons except the clear button
for (let button of buttons) {
  if (button.id !== "clear") {
    button.addEventListener("click", tap);
  }
}

//Function to play clear tap sound
function clearTap() {
  const audio = new Audio("audios/eraseTap-output.mp3");
  audio.play();
}

//Add click event to cleartap button
clear.addEventListener("click", clearTap);

//Function to append input to the display
function appendToDisplay(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value += input;
  }
}

//Function to do the calculation
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

//Function to clear the last input
function clearLast() {
  display.value = display.value.slice(0, -1);
  calculation.textContent = "";
}

//Function to clear all value from input
function allClear() {
  display.value = "";
  calculation.textContent = "";
}
