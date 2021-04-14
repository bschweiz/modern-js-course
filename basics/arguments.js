let cubed = (a,b,c) => {
    return a * b * c
}

console.log(cubed(7,2,3))

let getScore = (_name = 'nobody', score = 0) => {
    return 'Name:  ' + _name + ' - Score: ' + score
}

let score = getScore()

console.log(score);

let getTip = (total, tipPercent = .2) => {
    
    return `A $${total * tipPercent} tip on ${total}`
}

console.log(getTip(100))
