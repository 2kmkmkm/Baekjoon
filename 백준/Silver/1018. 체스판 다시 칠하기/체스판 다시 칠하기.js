const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [a, b, ...arr] = input.split(/\s+/);
const m = Number(a);
const n = Number(b);

let paint = 64;

for (let i = 0; i <= m - 8; i++) {
    for (let j = 0; j <= n - 8; j++) {
        let countW = 0; // 첫 칸이 W인 경우에 틀린 갯수
        let countB = 0; // 첫 칸이 B인 경우에 틀린 개수

        for (let k = 0; k < 8; k++) {
            for (let l = 0; l < 8; l++) {
                const current = arr[i + k][j + l]; // 실제 판의 색깔 (W 또는 B)

                if ((k + l) % 2 === 0) {
                    // k + l이 짝수 => 첫번째 칸과 같아야 함
                    if (current !== "W") countW++;
                    if (current !== "B") countB++;
                } else {
                    // k + l이 홀수 => 첫번째 칸과 달라야 함
                    if (current !== "W") countB++;
                    if (current !== "B") countW++;
                }
            }
        }

        const min = Math.min(countW, countB);
        if (min < paint) paint = min;
    }
}

console.log(paint);