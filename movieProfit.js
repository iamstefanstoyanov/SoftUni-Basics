function movieProfit(input) {
    let name = input[0]
    let days = Number(input[1])
    let tickets = Number(input[2])
    let priceForTicket = Number(input[3])
    let leftForCinema = Number(input[4])
    let priceForOneDay = tickets * priceForTicket
    let totalIncome = priceForOneDay * days
    let leftForCinemaPr = (totalIncome * leftForCinema) / 100
    let income = totalIncome - leftForCinemaPr
    console.log(`The profit from the movie ${name} is ${income.toFixed(2)} lv.`)
}
movieProfit(["The Programmer",
    "40",
    "34785",
    "10.45",
    "14",
])