const output = document.getElementById('output');

function OurOutput(value) {
    output.textContent += value;
}

function clearOutput() {
    output.textContent = ''; 
}

function deleteLast() {
    output.textContent = output.textContent.slice(0, -1); 
}

function calculate() {
    try {
        output.textContent = eval(output.textContent); 
    } catch (e) {
        output.textContent = 'Error'; 
    }
}