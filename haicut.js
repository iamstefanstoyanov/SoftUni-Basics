function hairSalon(input) {
    let index = 0;
    let command = input[index];
    index++;
    let goal = Number(command)
    let money = 0
    let goalReached = false
    command = input[index];
    index++;
    while (command !== "closed") {
        if (command === "haircut") {
            command = input[index];
            index++;
            switch (command) {
                case "mens":
                    money += 15;
                    break;
                case "ladies":
                    money += 20;
                    break;
                case "kids":
                    money += 10;
                    break;
            }
        } else {
            command = input[index];
            index++;
            switch (command) {
                case "touch up":
                    money += 20;
                    break;
                case "full color":
                    money += 30;
                    break;
            }
        }

        command = input[index];
        index++;
        if (goal <= money) {
            goalReached = true
            break;
        }
    }
    if(goalReached){
        console.log(`You have reached your target for the day!`)
        console.log(`Earned money: ${money}lv.`)
    }else{
        let diff = Math.abs(goal-money)
        console.log(`Target not reached! You need ${diff}lv. more.`)
        console.log(`Earned money: ${money}lv.`)
    }
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

