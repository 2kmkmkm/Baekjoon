function solution(s){
    let count = 0;
    
    if (s[0] === ")" || s[s.length - 1] === "(") return false;
    
    for (i = 0; i < s.length; i++) {
        if (s[i] === "(") count++;
        else count--;
        
        if (count < 0) return false;
    }
    
    return count === 0;
}