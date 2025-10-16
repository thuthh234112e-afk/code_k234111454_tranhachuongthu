function showMessage(message) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

function getInput() {
    return document.getElementById('input-data').value;
}

function setResult(result) {
    document.getElementById('result-data').value = result;
}

function enterData() {
    const newData = prompt("Vui lòng nhập dữ liệu chuỗi vào đây:");
    if (newData !== null) {
        document.getElementById('input-data').value = newData;
        setResult("Dữ liệu đã được nhập thành công!");
    }
}

function displayUppercase() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }
    const result = input.toUpperCase();
    setResult(result);
}

function displayLowercase() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }
    const result = input.toLowerCase();
    setResult(result);
}

function countLowercase() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }
    const matches = input.match(/[a-z]/g);
    const count = matches ? matches.length : 0;
    setResult(`Số lượng ký tự in thường: ${count}`);
}

/**
 * [Count the number of uppercase characters] Đếm số lượng ký tự in hoa.
 */
function countUppercase() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }
    // Biểu thức chính quy: tìm tất cả các ký tự từ 'A' đến 'Z'
    const matches = input.match(/[A-Z]/g);
    const count = matches ? matches.length : 0;
    setResult(`Số lượng ký tự in hoa: ${count}`);
}

/**
 * [Output one word per line] Xuất mỗi từ trên một dòng.
 */
function outputWordsPerLine() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }
    // Tách chuỗi bằng khoảng trắng (bao gồm cả tab và ngắt dòng)
    // Sau đó lọc bỏ các chuỗi rỗng (xuất hiện khi có nhiều khoảng trắng liên tiếp)
    const words = input.split(/\s+/).filter(word => word.length > 0);
    const result = words.join('\n');
    setResult(result);
}

/**
 * [Word count] Đếm số lượng từ trong chuỗi.
 */
function wordCount() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }
    // Tương tự như hàm trên, tách từ và đếm số lượng phần tử không rỗng
    const words = input.split(/\s+/).filter(word => word.length > 0);
    const count = words.length;
    setResult(`Số lượng từ: ${count}`);
}

/**
 * [print vowels, consonants] In ra danh sách các nguyên âm và phụ âm tìm thấy.
 */
function printVowelsConsonants() {
    const input = getInput();
    if (!input) {
        showMessage("Vui lòng nhập dữ liệu vào ô Input Data.");
        return;
    }

    // Chuẩn hóa chuỗi (chỉ giữ lại chữ cái và chuyển về in thường)
    const cleanInput = input.toLowerCase().replace(/[^a-z]/g, '');

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const foundVowels = new Set();
    const foundConsonants = new Set();
    
    for (const char of cleanInput) {
        if (vowels.has(char)) {
            foundVowels.add(char);
        } else {
            foundConsonants.add(char);
        }
    }

    const result = [
        "Nguyên âm tìm thấy: " + (Array.from(foundVowels).sort().join(', ') || "Không có"),
        "Phụ âm tìm thấy: " + (Array.from(foundConsonants).sort().join(', ') || "Không có")
    ].join('\n\n');
    
    setResult(result);
}

/**
 * [W3C's String Processing Website] Mở trang web W3C (mô phỏng).
 */
function showW3cWebsite() {
    // Trong môi trường iframe, không thể mở cửa sổ mới
    showMessage("Mô phỏng: Mở trang web W3C về Xử lý Chuỗi...");
    // Hoặc mở liên kết trong cùng cửa sổ nếu được phép
    // window.open('https://www.w3.org/', '_blank');
}
