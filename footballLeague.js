function footballLeague(input) {
    let capacity = Number(input[0]);
    let fensCount = Number(input[1]);
    let index = 2

    let capacityPr = fensCount / capacity * 100
    let a = 0
    let b = 0
    let v = 0
    let g = 0

    for (let i = 1; i <= fensCount; i++) {
        let sector = input[index];
        index++
        switch (sector) {
            case "A":
                a += 1;
                break;
            case "B":
                b += 1;
                break;
            case "V":
                v += 1;
                break;
            case "G":
                g += 1;
                break;
        }
    }
    let aPr = a/fensCount*100
    let bPr = b/fensCount*100
    let vPr = v/fensCount*100
    let gPr = g/fensCount*100
    console.log(aPr.toFixed(2)+"%")
    console.log(bPr.toFixed(2)+"%")
    console.log(vPr.toFixed(2)+"%")
    console.log(gPr.toFixed(2)+"%")
    console.log(capacityPr.toFixed(2)+"%")
}
footballLeague(["1000","12","A","A","V","V","A","G","A","A","V","G","V","A"])