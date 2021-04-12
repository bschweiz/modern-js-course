let age = 74
const isChild = age <= 7
const isSenior = age >= 65

console.log(isChild, isSenior)

if (isChild) {
    console.log('You are a baby')
} else if (isSenior) {console.log('You are Old')}