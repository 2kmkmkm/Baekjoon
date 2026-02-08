const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const n = Number(input);
let s = 2;

for (let i = 1; i <= n; i++) {
    s = 2 * s - 1;
}

console.log(s * s);