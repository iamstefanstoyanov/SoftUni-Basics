function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1])
    let lastLet = 97 + l
    let printLine = ""
    for (let s1 = 1; s1 < n; s1++) {
        for (let s2 = 1; s2 < n; s2++) {
            for (let s3 = 97; s3 < lastLet; s3++) {
                for (let s4 = 97; s4 < lastLet; s4++) {
                    for (let s5 = 1; s5 <= n; s5++) {
                        if (s5 > s1 && s5 > s2) {
                            printLine+="" + s1 + s2 + String.fromCharCode(s3) + String.fromCharCode(s4) + s5 +" "
                        }
                    }
                }
            }
        }
    }
    console.log(printLine)
}
    passwordGenerator(["2", "4"])