const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const n = Number(input[0]);
const m = Number(input[1]);

const arr1 = new Map();
const arr2 = new Map();

let idx = 2;

for (let i = 0; i < n; i++) {
    arr1.set(i + 1, input[idx]);
    arr2.set(input[idx++], i + 1);
}

for (let i = 0; i < m; i++) {
    let id = idx++;
    const val = Number(input[id]);

    if (Number.isFinite(val)) {
        console.log(arr1.get(val));
    } else {
        console.log(arr2.get(input[id]));
    }
}