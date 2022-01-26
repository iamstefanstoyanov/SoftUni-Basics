function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let price = 0
    switch (destination) {
        case "Sofia":
            if (season === "Winter") {
                price = 17000 * 1.25 * days
            } else {
                price = 12500 * 1.25 * days
            };
            break;
        case "Dubai":
            if (season === "Winter") {
                price = 45000 * 0.7 * days
            } else {
                price = 40000 * 0.7 * days
            };
            break;
        case "London":
            if (season === "Winter") {
                price = 24000 * days
            } else {
                price = 20250 * days
            };
            break;
    }
    let diff= Math.abs(budget-price)
    if(budget>=price){
console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    }else{
console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }
}
movieDestination(["200000",
"London",
"Summer",
"7"])


