function finalCompetition(input) {
    let dancesCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];
    let totalPoints = 0
    switch (location) {
        case "Abroad":
            totalPoints = dancesCount * points + (dancesCount * points * 0.5);
            if(season === "summer"){
                totalPoints = totalPoints * 0.9
            }else{
                totalPoints = totalPoints * 0.85
            }
            break;
        case "Bulgaria":
            totalPoints = dancesCount * points;
            if(season === "summer"){
                totalPoints = totalPoints * 0.95
            }else{
                totalPoints = totalPoints * 0.92
            }
            break;
    }
    let donation = totalPoints * 0.75;
    let moneyLeft = totalPoints - donation;
    let moneyPerDancer = moneyLeft / dancesCount
    console.log(`Charity - ${donation.toFixed(2)}`)
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

