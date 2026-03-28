const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, ...arr] = input.split(/\s+/).map(Number);

const newArr = arr.sort((a, b) => a - b).join("\n");
console.log(newArr);