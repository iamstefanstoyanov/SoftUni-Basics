function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);
    for (let i = a1; i <= (a2 - 1); i++) {
        for (let k = 1; k <= (n - 1); k++) {
            for (let m = 1; m <= ((n / 2) - 1); m++) {
                if (i % 2 !== 0 && (k + m + i) % 2 !== 0) {
                    console.log(`${String.fromCharCode(i)}-${k}${m}${i}`)
                }
            }
        }
    }

}
movieTickets(["69",
"72",
"4 "])
