const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let [n, ...arr] = input.split(/\s+/).map(Number); // 2, 4, -10, 4, -9

// 중복 제거
let set = [...new Set(arr)]; // 2 4 -10 -9

// 정렬
let sorted = set.sort((a, b) => a - b); // -10 -9 2 4

// 번호 매기기
let map = new Map();
sorted.forEach((v, i) => map.set(v, i)); // (-10, 0), (-9, 1), (2, 2), (4, 3)

// 변환
let result = arr.map((v) => map.get(v)); // (2, 2), (4, 3), (-10, 0), (4, 3), (-9, 1)

console.log(result.join(" "));