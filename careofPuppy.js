function puppycare(input) {
    let kgOfFood = Number(input[0]);
    let index = 1
    let foodEaten = input[index];
    index++;
    let foodTotal = kgOfFood * 1000
    let grOfFood = 0
    while (foodEaten !== "Adopted") {
        grOfFood += Number(foodEaten)
        foodEaten = input[index];
        index++;
    }
    let diff = Math.abs(foodTotal - grOfFood)
    if(foodTotal>=grOfFood){
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    }else{
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }
}
puppycare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
