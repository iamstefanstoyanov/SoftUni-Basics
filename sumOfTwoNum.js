function sumOfTwo(input) {
    let startRange = Number(input[0])
    let endRange = Number(input[1])
    let targetNum = Number(input[2])
    let count = 0
    let isFound = false
    for (let i = startRange; i <= endRange; i++) {
        for (let j = startRange; j <= endRange; j++) {
            count++
            if (i + j === targetNum) {
                console.log(`Combination N:${count} (${i} + ${j} = ${targetNum})`)
                isFound = true
                break;
            }

        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${count} combinations - neither equals ${targetNum}`)
    }
}
sumOfTwo(["23",
    "24",
    "20"
])