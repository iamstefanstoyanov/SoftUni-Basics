function hospital(input) {
    let days = Number(input[0]);
    let index = 1
    let doctors = 7;
    let curedPatiants = 0;
    let diff = 0;
    for (let i = 1; i <= days; i++) {
        let patiants = Number(input[index]);
        index++
        if (curedPatiants < diff && i % 3 === 0) {
            doctors +=1
        }
        if (doctors >= patiants) {
            curedPatiants += patiants
        } else {
            diff += patiants - doctors
            curedPatiants += doctors
        }
    }
    console.log(`Treated patients: ${curedPatiants}.`)
    console.log(`Untreated patients: ${diff}.`)
}

hospital(["6", "25", "25", "25", "25", "25", "2"])
//(["6", "25", "25", "25", "25", "25", "2"])
//(["3", "7", "7", "7"])
//(["4", "7", "27", "9", "1"])