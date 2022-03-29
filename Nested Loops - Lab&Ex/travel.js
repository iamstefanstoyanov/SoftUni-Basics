function travel(input) {
    let destination = "";
    while (destination !== "End") {
        destination = input.shift();
        let priceDestination = Number(input.shift());
        let saving = 0;
        for (let savingTot = 0; savingTot < priceDestination;) {
            saving = Number(input.shift())
            savingTot += saving
            if (savingTot >= priceDestination) {
                console.log(`Going to ${destination}!`)
            }
        }
    }
}
function test(input) {
    let index = 0;
    let command = input[index];
    index++
    let dest;
    let budget = 0
    let moneySaved = 0
    while (command !== "End") {
        dest = command
        command = input[index]
        index++;
        budget = Number(command)
        while (true) {
            if (budget <= moneySaved) {
                console.log(`Going to ${dest}!`)
                command = input[index]
                index++;
                moneySaved = 0
                break;
            }
            command = Number(input[index])
            index++
            moneySaved += command
        }
    }
}