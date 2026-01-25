const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(/\s+/).map(Number);

console.log(a * b);