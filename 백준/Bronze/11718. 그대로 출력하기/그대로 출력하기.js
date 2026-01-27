const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const str = input.split("\n");

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}