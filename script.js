let display = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const c = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let prevNumber = null;
let currNumber = '';
let operator = null;

equals.addEventListener("click"
    , () => operate(operator, prevNumber, currNumber)
);

operators.forEach(operator => 
    operator.addEventListener("click"
        , () => storeOperator(operator)));

numbers.forEach(number => 
    number.addEventListener("click"
        , () => appendToDisplay(number)));

c.addEventListener("click", () => clear());

backspace.addEventListener("click", 
    () => {
        //slice to remove last character
        display.textContent = display.textContent.slice(0, -1); 
        currNumber = currNumber.slice(0, -1);
    });

function appendToDisplay(number) {
    if (display.textContent.length < 11) {
        currNumber += number.textContent;
        display.textContent += number.textContent;
    }
}

function clear() {
    display.textContent = "";
    prevNumber = null;
    operator = null;
    currNumber = '';
}

function storeOperator(op) {
    prevNumber = currNumber;
    currNumber = '';
    display.textContent = '';
    operator = op.textContent;
}

function operate(operator, a, b) {
    firstNum = parseInt(a);
    secondNum = parseInt(b);
    ans = null;

    if (operator == "+") {
        ans = firstNum + secondNum;
    } else if (operator == "-") {
        ans = firstNum - secondNum;
    } else if (operator == "x") {
        ans = firstNum * secondNum;
    } else {
        ans = firstNum / secondNum;
    }
    currNumber = ans;
    display.textContent = ans; 
}
