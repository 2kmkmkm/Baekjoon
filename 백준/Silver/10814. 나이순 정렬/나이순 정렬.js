const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let [n, ...arr] = input.split(/\s+/);

let idx = 0;
let newArr = [];

for (let i = 0; i < n; i++) {
    newArr.push([arr[idx++], arr[idx++]]);
}   

newArr.sort((a , b) => a[0] - b[0]);

for (let i = 0; i < n; i++) {
    console.log(newArr[i][0] + " " + newArr[i][1]);
}