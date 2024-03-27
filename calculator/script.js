let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearButton = document.querySelectorAll(".clear-btn"),
    decimalButton = document.getElementById("decimal"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";

const number = () => {
    numbers.forEach(item => {
        item.addEventListener("click", (e) => {
            if(MemoryNewNumber || display.value === "0") {
                display.value = e.target.textContent;
                MemoryNewNumber = false;
            } else {
                display.value += e.target.textContent;
            }
        });
    });
};

number();

const operation = () => {
    operations.forEach(item => {
        item.addEventListener("click", (e) => {
            if(MemoryNewNumber && MemoryPendingOperation != "=") {
                display.value = MemoryCurrentNumber;
            } else {
                MemoryNewNumber = true;
                if (MemoryPendingOperation === "+") {
                    MemoryCurrentNumber += +display.value;  
                } else if (MemoryPendingOperation === "-") {
                    MemoryCurrentNumber -= +display.value;  
                } else if (MemoryPendingOperation === "*") {
                    MemoryCurrentNumber *= +display.value;  
                } else if (MemoryPendingOperation === "/") {
                    MemoryCurrentNumber /= +display.value;  
                } else {
                    MemoryCurrentNumber = +display.value;  
                }
                display.value = MemoryCurrentNumber;
                MemoryPendingOperation =  e.target.textContent;
            }
        });
    });
};

operation();

const clearBtn = () => {
    clearButton.forEach(item => {
        item.addEventListener("click", (e) => {
            if(e.target.textContent === "ce") {
                display.value = "0";
                MemoryNewNumber = true;
            } else if(e.target.textContent === "c") {
                display.value = "0" ;
                MemoryNewNumber = true;
                MemoryCurrentNumber = 0;
                MemoryPendingOperation = "";
        }});
    });
};

clearBtn();


const addDecimal = () => {
    decimalButton.addEventListener("click", () => {
        if(MemoryNewNumber) {
            display.value = "0.";
            MemoryNewNumber = false;
        } else {
            if(display.value.indexOf(".") === -1) {
                display.value += ".";
            }
        }
    });
};

addDecimal();