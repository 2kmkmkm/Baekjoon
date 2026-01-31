const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [str, n] = input.split(/\s+/);

const arr = str.split('').reverse();

// 1BC2 => ['2', 'C', 'B', '1']

const s = Number(n);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let ch;

    if (arr[i] >= '0' && arr[i] <= '9') ch = Number(arr[i]);
    else ch = arr[i].charCodeAt(0) - 55;

    sum += (s ** i) * ch;
}

console.log(sum);