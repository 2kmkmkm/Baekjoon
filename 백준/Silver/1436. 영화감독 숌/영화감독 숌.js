const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const n = Number(input);
let count = 0;
let i = 666;

while (true) {
    if (i.toString().includes("666")) count++;
    if (count === n) {
        console.log(i);
        break;
    }

    i++;
}