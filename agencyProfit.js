function agencyProfit(input){
    let name = input[0]
    let adultTickets = Number(input[1])
    let kidTickets = Number(input[2])
    let adultPrice = Number(input[3])
    let tax = Number(input[4])
    let kidPrice = adultPrice * 0.3;
    let totalAdultPriceForTicket = adultPrice + tax
    let totalKitPriceForTicket = kidPrice +tax
    let totalPriceForAllTickets = (totalAdultPriceForTicket*adultTickets)+(totalKitPriceForTicket*kidTickets)
    let profit = totalPriceForAllTickets * 0.2;
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)

}
profit(["WizzAir","60","23","158.96","39.12"])