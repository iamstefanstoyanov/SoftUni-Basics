function dishwasher(input) {
    let detergentCount = Number(input[0]);
    let detergentInMl = detergentCount * 750;
    let index = 1
    let command = input[index];
    index++;
    let count = 0
    let dishCount = 0
    let potCount = 0
    while (command !== "End") {
        let number = Number(command)
        count++
        if (count % 3 === 0) {
            potCount += number
            detergentInMl -= number * 15
        } else {
            dishCount += number
            detergentInMl -= number * 5
        }
        if (detergentInMl < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`)
            break;
        }
        command=input[index];
        index++;

    }
    if (command === "End") {
        console.log(`Detergent was enough!`)
        console.log(`${dishCount} dishes and ${potCount} pots were washed.`)
        console.log(`Leftover detergent ${detergentInMl} ml.`)
    }

}
dishwasher(["1", "10", "15", "10", "12", "13", "30",])