function happyCatParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalSum = 0
    let daysCount = 0
    for (let i = 1; i <= days; i++) {
        daysCount++
        let tempSum =0
        if (i % 2 === 0) {
            for (let k = 1; k <= hours; k++) {
                if (k % 2 !== 0) {
                    totalSum+=2.5
                    tempSum+=2.5
                } else {
                    totalSum+=1
                    tempSum+=1
                }
            }
        } else {
            for (let k = 1; k <= hours; k++) {
                if (k % 2 === 0) {
                    totalSum+=1.25
                    tempSum+=1.25
                } else {
                    totalSum+=1
                    tempSum+=1
                }
            }
        }
        console.log(`Day: ${daysCount} - ${tempSum.toFixed(2)} leva`)
        tempSum = 0
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`)
}
happyCatParking(["5", "2"])