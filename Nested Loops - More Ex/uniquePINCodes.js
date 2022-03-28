function uniquePINCodes(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    for (let a = 2; a <= n1; a += 2) {
        for (let b = 2; b <= n2; b++) {
            if (b === 2 || b === 3 || b === 5 || b === 7) {
                for (let c = 2; c <= n3; c += 2) {
                    console.log(`${a} ${b} ${c}`)
                }
            }

        }
    }
}
uniquePINCodes(["3", "5", "5"])