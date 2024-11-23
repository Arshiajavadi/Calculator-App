const display = document.getElementById("display");
const calculation = document.querySelector('.calculation');

function appendToDisplay(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value += input;
  }
}

function calculate() {
  if (display.value === null || display.value === '') {
    display.value = 0;
    calculation.textContent = null;
  }
  else {
    try {
      const result = eval(display.value);
      calculation.textContent = display.value;
      display.value = result;
    } catch (error) {
      display.value = "Error";
    };
  }
}


function clearLast() {
  display.value = display.value.slice(0, -1);
  calculation.textContent = '';
}

function allClear() {
  display.value = "";
  calculation.textContent = '';
}
