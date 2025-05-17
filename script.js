let display = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const c = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");

numbers.forEach(number => 
    number.addEventListener("click"
        , () => appendToDisplay(number)));

c.addEventListener("click", () => clear());

backspace.addEventListener("click", 
    () => {
        //slice to remove last character
        display.textContent = display.textContent.slice(0, -1);
    })

function appendToDisplay(number) {
    display.textContent += number.textContent;
}

function clear() {
    display.textContent = "";
}
