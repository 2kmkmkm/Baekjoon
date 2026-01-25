const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let [h, m] = input.split(/\s+/).map(Number);

if (m >= 45) m -= 45; // 0시 45분 -> 0시
else {
    // 0시 40분 -> 23시 55분
    if (h < 1) h = 23;

    // 1시 20분 -> 0시 35분
    else h -= 1;

    m += 15;
}

console.log(h + " " + m);
