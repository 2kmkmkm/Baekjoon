const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const data = input.split(/\s+/).map(Number);

let str = "";

for (let i = 0; i < 6; i++) {
    if (i >= 0 && i <= 1) str += 1 - data[i] + " ";
    else if (i >= 2 && i <= 4) str += 2 - data[i] + " ";
    else str += 8 - data[i]; 
}

console.log(str);