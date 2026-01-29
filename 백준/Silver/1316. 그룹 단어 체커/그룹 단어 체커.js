const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, ...data] = input.split(/\s+/);
const num = Number(n);

let count = 0;

for (let i = 0; i < num; i++) {
    let check = [];
    let res = true;

    check.push(data[i][0]);

    for (let j = 1; j < data[i].length; j++) {
        let ch = data[i][j];

        if (!check.includes(ch)) check.push(data[i][j]);
        else if (check.includes(ch) && data[i][j - 1] !== ch) {
            res = false;
            break;
        }
    }

    if (res) count++;
}

console.log(count);