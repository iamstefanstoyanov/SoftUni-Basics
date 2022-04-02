function backToPast(input) {
    let inhMoney = Number(input[0]);
    let yearToLive = Number(input[1]);
    let age = 17;
    for (let i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            age +=1;
            inhMoney -= 12000
        } else {
            age +=1;
            inhMoney -= 12000 + age * 50
        }
        
    }
    if (inhMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inhMoney.toFixed(2)} dollars left.`)
    }else{
        let diff = Math.abs(inhMoney)
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }
} backToPast(["100000.15",
    "1808"])
