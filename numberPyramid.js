function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1
    let isBigger = false
    let printLine = "";
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= r; c++) {
            if (current > n) {
                isBigger = true
                break;
            }
            printLine += current + " "
            current++
        }
        console.log(printLine);
        printLine = ""
        if(isBigger){
            break;
        }
    }
}
numberPyramid(["7"])