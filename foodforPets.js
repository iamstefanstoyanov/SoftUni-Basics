function foodforPets(input) {
    let days = Number(input[0]);
    let foodQuantity = Number(input[1]);
    let index = 2;
    let dog = Number(input[index]);
    index++;
    let cat = Number(input[index]);
    index++;
    let countDays = 0
    let totalFoodEaten = 0;
    let totalDogEaten = 0;
    let totalCatEaten = 0;
    let totalEatenBiscuits = 0
    while (days > countDays) {
        countDays++
        totalDogEaten += dog
        totalCatEaten += cat
        totalFoodEaten += dog + cat
        if (countDays % 3 === 0) {
            totalEatenBiscuits += ((dog + cat) * 0.10)
        }
        dog = Number(input[index]);
        index++;
        cat = Number(input[index]);
        index++;

    }
    let dogPr = totalDogEaten / totalFoodEaten * 100;
    let catPr = totalCatEaten / totalFoodEaten * 100;
    let totalPr = totalFoodEaten / foodQuantity * 100;
    console.log(`Total eaten biscuits: ${Math.round(totalEatenBiscuits)}gr.`)
    console.log(`${totalPr.toFixed(2)}% of the food has been eaten.`)
    console.log(`${dogPr.toFixed(2)}% eaten from the dog.`)
    console.log(`${catPr.toFixed(2)}% eaten from the cat.`)
}
foodforPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
