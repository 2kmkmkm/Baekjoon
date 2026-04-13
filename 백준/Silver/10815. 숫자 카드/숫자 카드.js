const fs = require('fs');
const ip = fs.readFileSync(0, 'utf8').trim();

let input = ip.split(/\s+/).map(Number);

let idx = 0;
let arr1 = new Set();
let arr2 = [];
let res = [];

const first = input[idx++];

for (let i = 0; i < first; i++) {
    arr1.add(input[idx++]);
}

const second = input[idx++];

for (let j = 0; j < second; j++) {
    arr2.push(input[idx++]);
}

for (let k = 0; k < arr2.length; k++) {
    if (arr1.has(arr2[k])) res.push(1);
    else res.push(0);
}

console.log(res.join(" "));