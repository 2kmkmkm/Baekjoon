const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, m, ...arr] = input.split(/\s+/).map(Number);

let close = 0;
let minus = Infinity;

for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            let sum = arr[i] + arr[j] + arr[k];
            
            if (m >= sum && m - sum < minus) {
                minus = m - sum;
                close = sum;
            }
        }
    }
}

console.log(close);