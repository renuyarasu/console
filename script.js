// Javascript console Methods
console.clear(); // Console was cleared

// console.trace();
function one() {
    two()
}
function two() {
    three()
}
function three() {
    four()
}
function four() {
    console.trace()
}
