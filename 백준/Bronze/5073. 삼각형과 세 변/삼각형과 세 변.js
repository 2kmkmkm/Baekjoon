const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const arr = input.split(/\s+/).map(Number);

let idx = 0;

while (1) {
    let t1 = arr[idx++];
    let t2 = arr[idx++];
    let t3 = arr[idx++];

    if (t1 === 0 && t2 === 0 && t3 === 0) break;

    let tri = [t1, t2, t3];
    tri.sort((a, b) => a - b);

    if (tri[0] + tri[1] <= tri[2]) console.log("Invalid");
    else if (t1 === t2 && t2 === t3) console.log("Equilateral");
    else if (t1 !== t2 && t2 !== t3 && t1 !== t3) console.log("Scalene");
    else console.log("Isosceles");
}