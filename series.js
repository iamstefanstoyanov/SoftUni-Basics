function series(input) {
    let budget = Number(input[0]);
    let count = Number(input[1]);
    let index = 2;
    let name = input[index++];
    let pricePerSeries = Number(input[index++]);
    let total = 0
    let counter = 0
    while (counter < count) {
        switch (name) {
            case "Thrones":
                total += pricePerSeries * 0.5;
                break;
            case "Lucifer":
                total += pricePerSeries * 0.6;
                break;
            case "Protector":
                total += pricePerSeries * 0.7;
                break;
            case "TotalDrama":
                total += pricePerSeries * 0.80;
                break;
            case "Area":
                total += pricePerSeries * 0.90;
                break;
            default:
                total += pricePerSeries
                break;
        }
        counter++
        name = input[index++];
        pricePerSeries = Number(input[index++]);
    }
    let diff = Math.abs(budget-total)
    if (budget >= total) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`)
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`)
    }
}

series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"
])