const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [a1, a0, c, n] = input.split(/\s+/).map(Number);

if (a1 * n + a0 <= c * n && c >= a1) console.log(1);
else console.log(0);