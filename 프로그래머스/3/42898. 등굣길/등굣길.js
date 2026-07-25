function solution(m, n, puddles) {
    const dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));
    
    // 집 위치는 1로 초기화
    dp[1][1] = 1;
    
    // 물 웅덩이 위치는 -1로 초기화
    for (const [x, y] of puddles) {
        dp[y][x] = -1;
    }
    
    // 한 칸씩 순회하면서 경로 확인
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 집 위치는 패스
            if (i === 1 && j === 1) continue;
            // 물 웅덩이(-1)는 패스
            else if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            
            // 해당 위치의 경로 수 업데이트 (위쪽 + 왼쪽)
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
        }
    }
    
    return dp[n][m];
}