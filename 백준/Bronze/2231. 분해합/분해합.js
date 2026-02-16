const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const n = Number(input);

for (let i = 1; i < n; i++) {
    let arr = i.toString().split("").map(Number);
    let sum = i + arr.reduce((a, b) => a + b);

    if (sum === n) return console.log(i);
}

console.log(0);