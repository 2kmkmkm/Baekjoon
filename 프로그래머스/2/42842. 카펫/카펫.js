function solution(brown, yellow) {
    var answer = [];
    
    // yellow 타일에서 w는 가로, h는 세로
    let w = 1;
    
    while (w <= yellow) {
        const h = yellow / w;
        
        if (yellow % w !== 0) {
            w++;
            continue;
        }
        
        if (brown === (w + 2) * (h + 2) - yellow && w >= h) {
            return [w + 2, h + 2]
        }
        
        w++;        
    }
    
    
    return answer;
}