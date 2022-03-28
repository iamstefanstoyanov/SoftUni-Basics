function lettersCombinations(input) {
    let l1 = input[0];
    let l2 = input[1];
    let l3 = input[2];
    let x1 = l1.charCodeAt(0)
    let x2 = l2.charCodeAt(0)
    let x3 = l3.charCodeAt(0)
    let count = 0
    let printLine = ""
    for (let a1 = x1; a1 <= x2; a1++) {
        if (a1 === x3) {
            continue;
        }
        for (let a2 = x1; a2 <= x2; a2++) {
            if (a2 === x3) {
                continue;
            }
            for (let a3 = x1; a3 <= x2; a3++) {
                if (a3 === x3) {
                    continue
                }
                count++
                printLine += "" + String.fromCharCode(a1) + String.fromCharCode(a2) + String.fromCharCode(a3) + " "
            }
        }
    }
    console.log(printLine + count)
}
lettersCombinations(["a", "c", "z"])