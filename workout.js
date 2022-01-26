function workout(input) {
    let days = Number(input[0]);
    let firstDay = Number(input[1]);
    let index = 2;
    let percent = Number(input[index]);
    index++
    let total = firstDay
    let nextrDay = firstDay
    for (let i = 1; i <= days; i++) {
        
        let currentDay = nextrDay + ((nextrDay * percent) / 100)
        nextrDay = 0
        total += currentDay
        nextrDay = currentDay
        percent = Number(input[index]);
        index++
    }

}
workout(["5", "30", "10", "15", "20", "5", "12"])