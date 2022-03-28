function carNumber(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = ""
    for (let i = 1; i <= 9; i++) {
        if (i >= firstNum && i <= secondNum) {
            for (let j = 1; j <= 9; j++) {
                if (j >= firstNum && j <= secondNum) {
                    for (let k = 1; k <= 9; k++) {
                        if (k >= firstNum && k <= secondNum) {
                            for (let m = 1; m <= 9; m++) {
                                if (m >= firstNum && m <= secondNum) {
                                    if (i % 2 !== 0 && m % 2 === 0 && i > m && (j + k) % 2 === 0) {
                                        printLine+= "" + i + j + k + m + " "
                                    }
                                    if (i % 2 === 0 && m % 2 !== 0 && i > m && (j + k) % 2 === 0) {
                                        printLine+= "" + i + j + k + m + " "
                                    }

                                }
                            }
                        }
                    }

                }
            }
        }
    }
    console.log(printLine)
}
carNumber(["5", "8"])
