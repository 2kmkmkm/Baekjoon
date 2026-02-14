const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [x, y, w, h] = input.split(/\s+/).map(Number);

let arr = [w - x, x, h - y, y];
arr.sort((a, b) => a - b);

console.log(arr[0]);