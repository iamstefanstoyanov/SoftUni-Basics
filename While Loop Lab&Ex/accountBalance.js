function accountBalance(input) {
    let total = 0
    let index = 0
    let currentNum = input[index]
    while (currentNum !== "NoMoreMoney") {
        let element = Number(currentNum)
        if (element < 0) {
            console.log("Invalid operation!")
            break;
        }
        total+=element
        console.log(`Increase: ${element.toFixed(2)}`)
        index++;
        currentNum=input[[index]]
    }
    console.log(`Total: ${total.toFixed(2)}`)
}
