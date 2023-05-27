function serviceLane(n, width, cases) {
const output = [];

for(let [start, end] of cases) {
let min = Infinity;

for(let i = start; i <= end; i++) {
const w = width[i]
min = Math.min(min, w);
}
output.push(min)
}
return output;
}
