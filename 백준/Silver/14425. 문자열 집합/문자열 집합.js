const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, m, ...arr] = input.split(/\s+/);

let idx = 0;
let count = 0;
let set1 = new Set();
let arr1 = [];

for (let i = 0; i < Number(n); i++) {
    set1.add(arr[idx++]);
}

for (let j = 0; j < Number(m); j++) {
    arr1.push(arr[idx++]);
}

for (let k = 0; k < arr1.length; k++) {
    if (set1.has(arr1[k])) count++;
}

console.log(count);