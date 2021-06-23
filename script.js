// Javascript console Methods
console.clear(); // Console was cleared

// console.time();
// console.timeLog();
// console.timeEnd();

console.time();

setTimeout(() => {
    console.timeEnd();
}, 5000) //default: 5015.69091796875 ms

setTimeout(() => {
    console.timeLog();
}, 2000) // default: 2014.47314453125 ms
