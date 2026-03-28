const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, ...arr] = input.split(/\s+/).map(Number);

let idx = 0;
let newArr = [];

for (let i = 0; i < n; i++) {
    newArr.push([arr[idx++], arr[idx++]]);
}

newArr.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    return a[0] - b[0];
})

for (let i = 0; i < n; i++) {
    console.log(newArr[i][0] + " " + newArr[i][1]);
}