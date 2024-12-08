const decimalInput = document.getElementById('decimalInput');
const binaryInput = document.getElementById('binaryInput');
const octalInput = document.getElementById('octalInput');
const hexInput = document.getElementById('hexInput');

function updateFieldsFromDecimal() {
    const decimalValue = parseInt(decimalInput.value, 10);
    if (isNaN(decimalValue)) {
        binaryInput.value = '';
        octalInput.value = '';
        hexInput.value = '';
    } else {
        binaryInput.value = decimalValue.toString(2);
        octalInput.value = decimalValue.toString(8);
        hexInput.value = decimalValue.toString(16).toUpperCase();
    }
}

function updateFieldsFromBinary() {
    const binaryValue = binaryInput.value;
    const decimalValue = parseInt(binaryValue, 2);
    if (isNaN(decimalValue)) {
        decimalInput.value = '';
        octalInput.value = '';
        hexInput.value = '';
    } else {
        decimalInput.value = decimalValue;
        octalInput.value = decimalValue.toString(8);
        hexInput.value = decimalValue.toString(16).toUpperCase();
    }
}

function updateFieldsFromOctal() {
    const octalValue = octalInput.value;
    const decimalValue = parseInt(octalValue, 8);
    if (isNaN(decimalValue)) {
        decimalInput.value = '';
        binaryInput.value = '';
        hexInput.value = '';
    } else {
        decimalInput.value = decimalValue;
        binaryInput.value = decimalValue.toString(2);
        hexInput.value = decimalValue.toString(16).toUpperCase();
    }
}

function updateFieldsFromHex() {
    const hexValue = hexInput.value;
    const decimalValue = parseInt(hexValue, 16);
    if (isNaN(decimalValue)) {
        decimalInput.value = '';
        binaryInput.value = '';
        octalInput.value = '';
    } else {
        decimalInput.value = decimalValue;
        binaryInput.value = decimalValue.toString(2);
        octalInput.value = decimalValue.toString(8);
    }
}

decimalInput.addEventListener('input', updateFieldsFromDecimal);
binaryInput.addEventListener('input', updateFieldsFromBinary);
octalInput.addEventListener('input', updateFieldsFromOctal);
hexInput.addEventListener('input', updateFieldsFromHex);  
