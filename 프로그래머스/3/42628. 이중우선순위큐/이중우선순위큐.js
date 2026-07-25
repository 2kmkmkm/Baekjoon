function solution(operations) {
    const queue = [];
    
    for (const i of operations) {
        const tempQueue = [...queue];
        
        if (i.slice(0, 1) === "I") {
            queue.push(parseInt(i.slice(2)));
        } else if (i === "D 1") {
            const max = tempQueue.sort((a, b) => a - b).pop();
            const index = queue.indexOf(max);
            queue.splice(index, 1);
        } else if (i === "D -1" && queue.length > 0) {
            const min = tempQueue.sort((a, b) => b - a).pop();
            const index = queue.indexOf(min);
            queue.splice(index, 1);
        }
    }
    
    queue.sort((a, b) => a - b);
    
    return queue.length === 0 ? [0, 0] : [queue[queue.length - 1], queue[0]];
}