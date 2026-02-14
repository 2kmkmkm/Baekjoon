const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const arr = input.split(/\s+/).map(Number);

let x = [];
let y = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        if (x.includes(arr[i])) x = x.filter((e) => e !== arr[i]);
        else x.push(arr[i]);
    }
    else {
        if (y.includes(arr[i])) y = y.filter((e) => e !== arr[i]);
        else y.push(arr[i]);
    }
}

console.log(x[0] + " " + y[0]);