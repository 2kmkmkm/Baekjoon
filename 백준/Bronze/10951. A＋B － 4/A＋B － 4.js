const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const data = input.split(/\s+/).map(Number);

let idx = 0;

while (idx < data.length) {
    let a = data[idx++];
    let b = data[idx++];

    console.log(a + b);
}