function reportSystem(input) {
    let goal = Number(input[0]);
    let index = 1;
    let command = input[index]
    index++;
    let count = 0;
    let sum = 0;
    let card = false
    let cash = false
    let peopleCard = 0
    let peopleCash = 0
    let paidCash = 0
    let paidCard = 0
    while (command !== "End") {
        count++
        let tempSum = Number(command)
        if (count % 2 === 0) { //card
            card = true
        } else { //cash
            cash = true
        }
        if (card && tempSum < 10) {
            console.log(`Error in transaction!`)
        } else if (card) {
            sum += tempSum
            peopleCard += tempSum
            paidCard++
            console.log(`Product sold!`)
        }

        if (cash && tempSum > 100) {
            console.log(`Error in transaction!`)
        } else if (cash) {
            sum += tempSum
            peopleCash += tempSum
            paidCash++
            console.log(`Product sold!`)
        }
        card = false
        cash = false
        command = input[index]
        index++
        if (sum >= goal) {
            let avgCash = peopleCash / paidCash
            let avgCard = peopleCard / paidCard
            console.log(`Average CS: ${avgCash.toFixed(2)}`)
            console.log(`Average CC: ${avgCard.toFixed(2)}`)
            break;
        }
    }
    if (command === "End") {
        console.log(`Failed to collect required money for charity.`)
    }

}
reportSystem(["600", "86", "150", "98", "227", "End"])