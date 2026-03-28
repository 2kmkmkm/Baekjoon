const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const arr = input.split("").map(Number);
const sortedArr = arr.sort((a, b) => b - a).join("");

console.log(sortedArr);