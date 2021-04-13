// student score, max possible score

//  you got  a (letter grade) (percentage)

let gradeCalc = (student, max) => {
    let percentage = student/max * 100
    let letter = 'F'
    
        if (percentage >= 90) {
            letter = 'A' 
        } else if (percentage >= 80) {
            letter = 'B' 
        } else if (percentage >= 70) {
            letter = 'C' 
        } else if (percentage >= 60) {
            letter = 'D'
        }

    


    console.log(`You got a ${letter} (${percentage}%)`)
}

gradeCalc(7,75)