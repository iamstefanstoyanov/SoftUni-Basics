function barcodeGenerator(input) {
    let startN = input[0];
    let endN = input[1];
    let a1 = Number(startN[0]);
    let a2 = Number(startN[1]);
    let a3 = Number(startN[2]);
    let a4 = Number(startN[3]);
    let b1 = Number(endN[0]);
    let b2 = Number(endN[1]);
    let b3 = Number(endN[2]);
    let b4 = Number(endN[3]);
    let printLine = ""
    for (let k = a1; k <= b1; k++) {
        for (let m = a2; m <= b2; m++) {
            for (let j = a3; j <= b3; j++) {
                for (let p = a4; p <= b4; p++) {
                    if (k % 2 !== 0 && m % 2 !== 0 && j % 2 !== 0 && p % 2 !== 0) {
                        printLine += "" + k + m + j + p + " "
                    }
                }
            }
        }
    }
    console.log(printLine)
}

barcodeGenerator(["1365",
"5877"])

