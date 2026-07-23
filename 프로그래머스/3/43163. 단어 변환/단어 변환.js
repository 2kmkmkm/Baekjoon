function solution(begin, target, words) {
    // begin 단어 -> target 단어
    // 최단 거리 -> BFS
    
    if (!words.includes(target)) return 0; // words에 target이 없으면 변환 불가
    
    // 한 글자만 다른지 확인하는 함수
    function diffOne(first, second) {
        let count = 0;
        
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) count++;
        }
        
        return count === 1;
    }
    
    // visited, queue 초기화
    // queue에는 [현재 단어, 이동 단계 수] 형태로 저장
    const visited = new Set();
    const queue = [[begin, 0]];
    visited.add(begin);
    
    // BFS (너비 우선 탐색)
    while (queue.length > 0) {
        const [currentWord, stepCount] = queue.shift();
        
        if (target === currentWord) return stepCount;
         
        // words에 있는 모든 단어 확인
        for (const next of words) {
            // 아직 방문하지 않았고, 한 글자만 다른 단어라면
            if (!visited.has(next) && diffOne(currentWord, next)) {
                visited.add(next);
                queue.push([next, stepCount + 1]);
            }
        }
    }
}