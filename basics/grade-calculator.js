// student score, max possible score

//  you got  a (letter grade) (percentage)

let gradeCalc = (student, max) => {
    let percentage = student/max 
    let letter

    if (percentage >= 90) {
        let letter = 'A' 
    } else if (percentage >= 80) {
        let letter = 'B' 
    } else if (percentage >= 70) {
        
        let letter = 'C' 
    } else if (percentage >= 60) {
        let letter = 'D'
    }

    console.log(`You got a ${letter} (${percentage}%)`)
}

gradeCalc(67,75)