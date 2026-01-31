const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let [n, ...data] = input.split(/\s+/).map(Number);

let idx = 0;

for (let i = 0; i < n; i++) {
    let num = data[idx++];
    let res = [];

    [25, 10, 5, 1].forEach((item) => {
        res.push(Math.floor(num / item));
        num = num % item;
    })

    console.log(res.join(" "));
}