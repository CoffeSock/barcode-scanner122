import { BrowserMultiFormatReader } from '@zxing/library';

const codeReader = new BrowserMultiFormatReader();

codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
    if (result) {
        console.log("Barcode:", result.getText());
    }
});

let acceptedCount = 0;
let usedCount = 0;
let invalidCount = 0;

const acceptedEl = document.getElementById("accepted");
const usedEl = document.getElementById("used");
const invalidEl = document.getElementById("invalid");