const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const [n, ...arr] = input.split("\n");

let set = new Set();

for (let i = 0; i < Number(n); i++) {
    const [name, state] = arr[i].split(" ");
    
    if (set.has(name)) {
        set.delete(name);
    } else {
        set.add(name);
    }
}

console.log([...set].sort().reverse().join("\n"));