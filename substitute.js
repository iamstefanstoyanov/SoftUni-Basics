function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let count = 0
    for (let n1 = k; n1 <= 8; n1++) {
        for (let n2 = 9; n2>=l; n2--) {
            for (let n3 = m; n3 <= 8; n3++) {
                for (let n4 = 9; n4>=n; n4--) {
                    if (n1 % 2 === 0 && n2 % 2 !== 0 && n3 % 2 === 0 && n4 % 2 !== 0) {
                        if (n1 === n3 && n2 === n4) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            count++
                            console.log(`${n1}${n2} - ${n3}${n4}`)
                        }
                        if (count == 6) {
                            return;
                        }
                       

                    }
                }
            }
        }
    }
}
substitute(["7",
"6",
"8",
"5"])


