function combinations(input) {
    let x = Number(input[0])
    let vCC = 0;
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= x; j++) {
            for (let o = 0; o <= x; o++) {
                let n = i + j + o
                if (n === x){
                    vCC++
                }
            }

        }
    }
    console.log(vCC)
    
}
combinations(["25"])