const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, m, ...data] = input.split(/\s+/).map(Number);

let idx = 0;
let arr = [];

for (let i = 0; i < n; i++) arr.push(i + 1);

for (let i = 0; i < m; i++) {
    let first = data[idx++];
    let second = data[idx++];

    let front = arr.slice(0, first - 1);
    let newArr = arr.slice(first - 1, second);
    let back = arr.slice(second);

    newArr.reverse();
    
    arr = front.concat(newArr, back);
}

console.log(arr.join(" "));