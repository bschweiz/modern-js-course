// Global scope (convertF2C, t1, t2)
    // Local scope (f,c)

let convertF2C = (f = 74) =>  {
    let c = (f - 32) * 5/9

    if (c <= 0) {
        let isFreezing = true
    } 

    return c
}



console.log(convertF2C());