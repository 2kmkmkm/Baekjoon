const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, x, ...arr] = input.split(/\s+/).map(Number);
let str = "";

for (let i = 0; i < n; i++) {
    if (arr[i] < x) str += arr[i] + `${i < n - 1 ? " " : ""}`;
}

console.log(str);