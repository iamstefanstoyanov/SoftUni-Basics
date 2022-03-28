function primePairs(input) {
    let firstPair = Number(input[0]);
    let secondPair = Number(input[1]);
    let diffFirstPair = Number(input[2]);
    let diffFsecondPair = Number(input[3]);
    let maxFirstPair = firstPair + diffFirstPair
    let maxFecondPair = secondPair + diffFsecondPair
    for (let i = firstPair; i <= maxFirstPair; i++) {
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            for (let k = secondPair; k <= maxFecondPair; k++) {
                if ((k % 2 !== 0 && k % 3 !== 0 && k % 5 !== 0 && k % 7 !== 0)) {
                    console.log(`${i}${k}`)
                }
            }
        }
    }
}
primePairs(["10", "30", "9", "6"])