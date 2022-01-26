function addBags(input) {
    let priceFor20kg = Number(input[0]);
    let kg = Number(input[1]);
    let dayLeft = Number(input[2]);
    let count = Number(input[3]);
    let tax = 0
    if (kg < 10) {
        tax = priceFor20kg * 0.2
    } else if (kg >= 10 && kg <= 20) {
        tax = priceFor20kg * 0.5
    } else {
        tax = priceFor20kg
    }
    if (dayLeft > 30) {
        tax *= 1.1
    } else if (dayLeft >= 7 && dayLeft <= 30) {
        tax *= 1.15
    } else {
        tax *= 1.4
    }
    let newBagPrice = (tax * count)
    console.log(`The total price of bags is: ${newBagPrice.toFixed(2)} lv.`)
}
addBags(["25.50",
"5",
"36",
"6"])

