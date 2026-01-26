const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, ...data] = input.split(/\s+/).map(Number);

let arr = data.sort((a, b) => a - b);
let max = arr[arr.length - 1];
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += arr[i] / max * 100;
}

console.log(sum / n);