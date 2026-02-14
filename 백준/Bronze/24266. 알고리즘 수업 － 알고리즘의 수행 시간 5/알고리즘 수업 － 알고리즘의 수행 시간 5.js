const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

// 1. 입력을 BigInt로 변환 (숫자 뒤에 n을 붙이거나 BigInt() 함수 사용)
const n = BigInt(input);

// 2. n^3 계산 (BigInt끼리 연산해야 하므로 지수도 BigInt여야 함)
const result = n * n * n; 

// 3. 출력할 때 .toString()을 사용하여 'n' 문자를 떼고 순수 숫자만 출력
console.log(result.toString());
console.log(3);