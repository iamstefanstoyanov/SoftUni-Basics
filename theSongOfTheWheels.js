function theSongOfTheWheels(input) {
    let num = Number(input[0]);
    let printLine = "";
    let count = 0
    let pass = ""
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            if (a < b) {
                for (let c = 1; c <= 9; c++) {
                    for (let d = 1; d <= 9; d++) {
                        if (c > d) {
                            if ((a * b) + (c * d) === num) {
                                count++
                                printLine += "" + a + b + c + d + " "
                                if (count === 4) {
                                    pass += "" + a + b + c + d + " "
                                }

                            }

                        }
                    }
                }
            }
        }
    }
    if (count === 0) {
        console.log(`No!`)
    } else if (count < 4) {
        console.log(printLine)
        console.log(`No!`)
    } else {
        console.log(printLine)
        console.log(`Password: ` + pass)
    }
}
theSongOfTheWheels(["11"])