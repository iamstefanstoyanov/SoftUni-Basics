function multiplyTable(input) {
    let n = input[0]
    let n1 = Number(n[2])
    let n2 = Number(n[1])
    let n3 = Number(n[0])
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            for (let m = 1; m <= n3; m++) {
                console.log(`${i} * ${j} * ${m} = ${i*j*m}`)
            }
        }
    }
}
multiplyTable(["222"])