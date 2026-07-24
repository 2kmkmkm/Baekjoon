function solution(triangle) {
    const dp = Array.from({ length: triangle.length }, (_, i) => Array(i + 1).fill(0));
        
    dp[0][0] = triangle[0][0];
    dp[1][0] = dp[0][0] + triangle[1][0];
    dp[1][1] = dp[0][0] + triangle[1][1];
    
    for (let i = 2; i < triangle.length; i++) {
        for (let j = 0; j <= i; j++) {
            let value = 0;
            
            if (j === 0) value = dp[i - 1][0] + triangle[i][j];
            else if (i === j) value = dp[i - 1][j - 1] + triangle[i][j];
            else {
                let first = dp[i - 1][j - 1] + triangle[i][j];
                let second = dp[i - 1][j] + triangle[i][j];
                
                value = first > second ? first : second;
            }
                        
            dp[i][j] = value;
        }
    }
    
    return dp[triangle.length - 1].sort((a, b) => b - a)[0];
}