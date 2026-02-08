const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const num = Number(input);
let max = 1; // 해당 층의 최대 숫자
let layer = 1; // 층수

while (max < num) {
    max += 6 * layer;
    layer++;
}

console.log(layer);