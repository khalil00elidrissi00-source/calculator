const display = document.getElementById("display");

function addToDisplay(input) {
    if (display.value === "0" || display.value === "ERROR") {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "0";
}

function toggleSign() {
    if (display.value === "0" || display.value === "ERROR") return;

    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        display.value = String(-result);
    } catch (error) {
        display.value = "ERROR";
    }
}

function calculateResult() {
    try {
        let expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');
        let result = eval(expression);
        display.value = parseFloat(result.toFixed(8));
    } catch (error) {
        display.value = "ERROR";
    }
}
function deleteDigit() {
    if (display.value.length > 1 && display.value !== "ERROR") {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}