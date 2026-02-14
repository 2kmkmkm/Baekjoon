const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const n = Number(input);

console.log(n * (n - 1) / 2);
console.log(2);