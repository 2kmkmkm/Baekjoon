const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [a, b] = input.split(/\s+/).map(Number);

let res;

if (a > 0 && b > 0) res = 1;
else if (a < 0 && b > 0) res = 2;
else if (a < 0 && b < 0) res = 3;
else res = 4;

console.log(res);
