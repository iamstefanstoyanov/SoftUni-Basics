function compFirm(input) {
    let n = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);
    index++
    let totalSales = 0
    let avgStars = 0
    let count = 0
    while (n > 0) {
        count++
        n--
        let stars = command % 10
        avgStars += stars
        let posSales = Math.floor(command / 10)
        let sales = 0
        switch (stars) {
            case 2:
                sales = 0
                totalSales += sales;
                break;
            case 3:
                sales = posSales * 0.5
                totalSales += sales;;
                break;
            case 4:
                sales = posSales * 0.7
                totalSales += sales;;
                break;
            case 5:
                sales = posSales * 0.85
                totalSales += sales;;
                break;
            case 6:
                sales = posSales
                totalSales += sales;;
                break;

        }
        command = Number(input[index]);
        index++

    }

    let avgScore = avgStars / count
    console.log(totalSales.toFixed(2))
    console.log(avgScore.toFixed(2))

}
compFirm(["2",
"204",
"206"])

