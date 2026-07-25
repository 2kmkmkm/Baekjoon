function solution(routes) {
    // 차량이 고속도로를 나가기 직전(진출 지점)에 카메라를 두면, 
    // 그 차량도 단속되고 그 지점을 지나치는 다른 차량들도 최대한 많이 묶어서 단속할 수 있다.
    
    routes.sort((a, b) => a[1] - b[1]);
    
    let cam = -30001;
    let count = 0;
    
    for (let i = 0; i < routes.length; i++) {
        if (routes[i][0] > cam) {
            cam = routes[i][1];
            count++;
        }
    }
    
    return count;
}