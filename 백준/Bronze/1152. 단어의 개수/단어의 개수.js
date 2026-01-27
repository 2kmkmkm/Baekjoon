const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const arr = input.split(/\s+/);

if (input === "") console.log("0");
else console.log(arr.length);