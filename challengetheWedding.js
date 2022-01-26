function challengetheWedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let maxTables = Number(input[2]);
    let printLine = "";
    let tableCount = 0
    let isFull = false
    while (tableCount <= maxTables) {
        for (let i = 1; i <= men; i++) {
            for (let k = 1; k <= women; k++) {
                tableCount++
                printLine += "" + `(${i} <-> ${k})` + " "
                if (tableCount >= maxTables) {
                    isFull = true
                    break;
                }
            }
            if (isFull) {
                break;
            }

        }
        break;
    }

    console.log(printLine)
}
challengetheWedding(["8", "5", "40"])