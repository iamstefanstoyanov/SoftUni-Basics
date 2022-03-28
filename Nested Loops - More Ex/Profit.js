function profit(input) {
    let oneLv = Number(input[0]);
    let twoLv = Number(input[1]);
    let fiveLv = Number(input[2]);
    let sum = Number(input[3]);
    for (let i = 0; i <= oneLv; i++) {
        for (let k = 0; k <= twoLv; k++) {
            for (let m = 0; m <= fiveLv; m++) {
                if((i*1 + k*2 + m*5) === sum){
                    console.log(`${i} * 1 lv. + ${k} * 2 lv. + ${m} * 5 lv. = ${sum} lv.`)
                }
            }
        }
    }

}
profit(["5", "3", "1", "7"])