
function getCoefficient(id) {
    const value = document.getElementById(id).value;
    const num = parseFloat(value);
    
    if (isNaN(num)) {
        // Trả về NaN để báo hiệu lỗi
        return NaN;
    }
    return num;
}

function findSolution() {
    const resultCell = document.getElementById('result-cell');
    
    const a = getCoefficient('a');
    const b = getCoefficient('b');
    const c = getCoefficient('c');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultCell.textContent = "Lỗi: Hệ số a, b, c phải là số hợp lệ.";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                resultCell.textContent = "Phương trình có vô số nghiệm (0=0).";
            } else {
                resultCell.textContent = "Phương trình vô nghiệm (c != 0).";
            }
        } else {
            const x = -c / b;
            resultCell.textContent = `Phương trình bậc nhất. Nghiệm: x = ${x.toFixed(4)}`;
        }
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imaginaryPart = (Math.sqrt(-delta) / (2 * a)).toFixed(4);
        resultCell.textContent = `Vô nghiệm thực. Nghiệm phức: x1 = ${realPart} + ${imaginaryPart}i ; x2 = ${realPart} - ${imaginaryPart}i`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultCell.textContent = `Nghiệm kép: x1 = x2 = ${x.toFixed(4)}`;
    } else {
        const sqrtDelta = Math.sqrt(delta);
        const x1 = (-b - sqrtDelta) / (2 * a);
        const x2 = (-b + sqrtDelta) / (2 * a);
        
        resultCell.textContent = `x1 = ${x1.toFixed(4)} ; x2 = ${x2.toFixed(4)}`;
    }
}

function clearInputs() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('result-cell').textContent = '';
}
