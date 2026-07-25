function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 인접 그래프
    for (const [u, v] of roads) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // 최단거리를 저장할 배열
    const distance = Array(n+1).fill(-1);
    
    // destination을 출발지로 설정
    const queue = [destination];
    distance[destination] = 0;
    
    let head = 0;
    
    while (head < queue.length) {
        const current = queue[head++];
        
        for (const next of graph[current]) {
            if (distance[next] === -1) {
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }
    
    return sources.map((s) => distance[s]);
}    