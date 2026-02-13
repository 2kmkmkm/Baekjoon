const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [a, b]= input.split(/\s+/).map(Number);

let count = 0;

for (let i = 1; i <= a; i++) {
    if (a % i === 0) count++;
    if (count === b) {
        console.log(i);
        break;
    }
}

if (count < b) console.log("0");