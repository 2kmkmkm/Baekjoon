const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const ch = input.split(/\s+/);

console.log(ch[0].charCodeAt(0));