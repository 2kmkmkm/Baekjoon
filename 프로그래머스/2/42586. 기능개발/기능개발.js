function solution(progresses, speeds) {
    let list1 = [];
    
    for (let i = 0; i < progresses.length; i++) {
        let p = progresses[i];
        let s = speeds[i];
        
        let n = Math.ceil((100 - p) / s); // 각 작업 당 배포에 걸리는 기간
        
        list1.push(n);
    }
    
    let list2 = [];
    let list3 = [];
   
    for (let i = 0; i < list1.length; i++) {
        let max = list1[i]; 
        let count = 1;
        let temp;
        
        for (let j = i + 1; j < list1.length; j++) {
            if (max >= list1[j]) {
                count++;
            } else {
                break;
            }
            temp = j;
        }
        
        list2.push(count);
        if (count > 1) i = temp;
        
    }
    
    return list2;
}