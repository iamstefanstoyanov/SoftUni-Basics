function equalSumsEvenOddPosition(input) {
    let startN = Number(input[0]);
    let endN = Number(input[1]);
    let printLine = ""
    for (let i = startN; i <= endN; i++) {
        let curNum = "" + i;
        let oddSum = 0
        let evenSum = 0
        for (let j = 0; j < curNum.length; j++) {
            let curDigit = Number(curNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += curDigit
            } else {
                oddSum += curDigit
            }
        }
        if(oddSum === evenSum){
            printLine+=`${i} `
        }
    }
    console.log(printLine)
}
test(["100000",
"100050"])