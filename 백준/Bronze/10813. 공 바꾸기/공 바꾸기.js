const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, m, ...data] = input.split(/\s+/).map(Number);

let idx = 0;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(i + 1);
}

for (let i = 0; i < m; i++) {
    let first = data[idx++];
    let second = data[idx++];
    
    let tmp = arr[first - 1]; 
    arr[first - 1] = arr[second - 1]; 
    arr[second - 1] = tmp;
}

console.log(arr.join(' '));