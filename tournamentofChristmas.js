function tournamentofChristmas(input) {
    let days = Number(input[0]);
    let index = 1
    let command = input[index];
    index++;
    let winsCount = 0;
    let loseCont = 0;
    let money = 0
    let tempMoney = 0
    let isWin = false
    for (let i = 1; i <= days; i++) {
        let dayWin = 0
        let dayLose = 0
        while (command !== "Finish") {

            command = input[index];
            index++;
            if (command === "win") {
                tempMoney += 20
                winsCount++
                dayWin++
            } else {
                loseCont++
                dayLose++
            }
            command = input[index];
            index++;
        }
        if (dayWin > dayLose) {
            tempMoney = tempMoney * 1.1
        }
        dayLose = 0
        dayWin = 0
        money += tempMoney
        tempMoney = 0
        command = input[index];
        index++
    }
    if (winsCount > loseCont) {
        isWin = true
        money = money * 1.2
    }
    if (isWin) {
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }
}
tournamentofChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])