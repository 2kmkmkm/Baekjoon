const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let [a, b, c] = input.split(/\s+/).map(Number);

let prize;

if (a === b && b === c) prize = 10000 + a * 1000;
else if (a !== b && a !== c && b !== c) {
    let array = [a, b, c].sort((a, b) => a - b);
    let max = array[2];
    prize = max * 100;
}
else {
    if (a === b) prize = 1000 + a * 100;
    else if (a === c) prize = 1000 + a * 100;
    else prize = 1000 + b * 100;
}

console.log(prize);