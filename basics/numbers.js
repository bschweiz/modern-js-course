// let studentScore = 18
// let max = 20

// console.log(`your score is ${100*(studentScore/max)}%`)

let f = 165
let c = (f - 32)*(5/9)
let k = (f + 459.67) * 5/9

console.log(f,c,k)

let isFreezing = f < 32
let isHOT = f > 100

console.log(isFreezing)

if (isFreezing) {
    console.log("it's FREEZING");
} else if (isHOT) {console.log('it is so HOT')}
else {console.log("go for it!");}