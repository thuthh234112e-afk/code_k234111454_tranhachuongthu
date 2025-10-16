
function getNumericInputs() {
    const aValue = document.getElementById('a').value;
    const bValue = document.getElementById('b').value;
    const cValue = document.getElementById('c').value;

    const a = parseFloat(aValue);
    const b = parseFloat(bValue);
    const c = parseFloat(cValue);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').textContent = 'Lỗi: Giá trị phải là số!';
        return null;
    }
    
    return { a, b, c };
}

function displayResult(value) {
    document.getElementById('result').textContent = value;
}

function calculateMax() {
    const inputs = getNumericInputs();
    if (inputs) {
        const result = Math.max(inputs.a, inputs.b, inputs.c);
        displayResult(result);
    }
}

function calculateMin() {
    const inputs = getNumericInputs();
    if (inputs) {
        const result = Math.min(inputs.a, inputs.b, inputs.c);
        displayResult(result);
    }
}

function calculateSin() {
    const inputs = getNumericInputs();
    if (inputs) {
        const a_radian = inputs.a * (Math.PI / 180);
        const result = Math.sin(a_radian);
        displayResult(result);
    }
}

function calculateCos() {
    const inputs = getNumericInputs();
    if (inputs) {
        const a_radian = inputs.a * (Math.PI / 180);
        const result = Math.cos(a_radian);
        displayResult(result);
    }
}

function calculatePower() {
    const inputs = getNumericInputs();
    if (inputs) {
        const result = Math.pow(inputs.a, inputs.b);
        displayResult(result);
    }
}