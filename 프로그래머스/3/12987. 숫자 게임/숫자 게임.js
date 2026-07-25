function solution(A, B) {
    // B가 이길 수 있다면? ➡️ 점수 $+1$ 하고, A와 B 모두 다음 카드(Ai++, Bi++)로 넘어감
    // B가 지거나 비긴다면? ➡️ 그 B 카딩으로는 A의 그 어떤 카드도 못 이김! 
    // 그러니까 그 B 카드는 버리고 더 큰 B 카드(Bi++)를 가져와서 다시 도전함.
    A.sort((a, b) => a - b); // 1, 3, 5, 7
    B.sort((a, b) => a - b); // 2, 2, 6, 8

    let Ai = 0;
    let Bi = 0;
    let score = 0;
    
    while (Ai <= A.length && Bi <= B.length) {
        if (A[Ai] < B[Bi]) {
            score++;
            Ai++
            Bi++;
        } else {
            Bi++;
        }
    }
    
    return score;
}