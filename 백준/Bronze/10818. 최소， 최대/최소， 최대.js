const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, ...arr] = input.split(/\s+/).map(Number);

let min = arr[0];
let max = arr[0];

for (let i = 1; i < n; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}

console.log(min + " " + max);