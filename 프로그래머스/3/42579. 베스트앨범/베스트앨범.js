function solution(genres, plays) {
    // 장르 -> 노래 -> 고유 번호 낮은 순
    const map = new Map();

    // 장르별 재생 횟수
    for (let i = 0; i < genres.length; i++) {
        map.set(genres[i], (map.get(genres[i]) || 0) + plays[i]);
    }
    
    const mapToList = [...map];
    mapToList.sort((a, b) => b[1] - a[1]);
    
    console.log("장르별 재생 횟수: ", mapToList);
    
    const listToMap = new Map(mapToList);
    
    const list = [];
    const map2 = new Map();
    
    // 노래별 재생 횟수
    for (const key of listToMap.keys()) {
        let tempList = [];
        
        for (let i = 0; i < genres.length; i++) {            
            if (key === genres[i]) tempList.push([key, plays[i], i]);
            map2.set(genres[i], (map2.get(genres[i]) || 0) + 1);

        }
        
        tempList.sort((a, b) => b[1] - a[1] || a[2] - b[2]);
        
        list.push(...tempList.slice(0, 2));
    }
    
    console.log("노래별, 고유번호 순: ", list);
    
    return list.map(item => item[2]);  
    
}