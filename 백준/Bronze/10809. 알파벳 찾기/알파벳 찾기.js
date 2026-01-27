const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let str = [];

for (let i = 97; i <= 122; i++) {
    let ch = String.fromCharCode(i);
    str.push(input.indexOf(ch));
}

console.log(str.join(' '));