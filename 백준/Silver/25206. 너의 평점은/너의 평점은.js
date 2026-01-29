const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const data = input.split(/\s+/);

const map = {
    "A+": 4.5,
    "A0": 4,
    "B+": 3.5,
    "B0": 3,
    "C+": 2.5,
    "C0": 2,
    "D+": 1.5,
    "D0": 1,
    "F": 0
};

let idx = 0;
let sum = 0;
let res = 0;

for (let i = 0; i < 20; i++) {
    const subject = data[idx++];
    const score = Number(data[idx++]);
    const grade = data[idx++];

    if (grade === "P") continue;

    sum += score;
    res += score * map[grade];
}

console.log(res / sum);