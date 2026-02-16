const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let n = Number(input);
let dp = new Array(n + 1).fill(Infinity);

dp[0] = 0;

for (let i = 3; i <= n; i++) {
    // (i-3)kg를 만드는 방법이 있다면, 거기에 3kg 봉지 하나를 더함
    if (dp[i - 3] !== Infinity) {
        dp[i] = Math.min(dp[i - 3] + 1, dp[i]);
    }

    // (i-5)kg를 만드는 방법이 있다면, 거기에 5kg 봉지 하나를 더함
    if (i >= 5 && dp[i - 5] !== Infinity) {
        dp[i] = Math.min(dp[i - 5] + 1, dp[i]);
    }
}

console.log(dp[n] === Infinity ? -1 : dp[n]);