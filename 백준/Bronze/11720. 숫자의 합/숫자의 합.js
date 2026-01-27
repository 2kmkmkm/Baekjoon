const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, number] = input.split(/\s+/);

let sum = 0;

for (let i = 0; i < Number(n); i++) {
    sum += Number(number[i]);
}

console.log(sum);