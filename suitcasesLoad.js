function suitcasesLoad(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let vol = input[index];
    index++;
    let count = 0;
    let briefcaseCount = 1;
    let isHaveSpace = true;
    while (vol !== "End") {
        let currentVol = Number(vol);
        if (briefcaseCount % 3 === 0) {
            currentVol = currentVol * 1.1
        }
        if (capacity < currentVol) {
            isHaveSpace = false;
            break;
        }
        capacity -= currentVol;
        briefcaseCount++
        count++;
        vol = input[index];
        index++;
    }
    if (isHaveSpace) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${count} suitcases loaded.`);

}
suitcasesLoad(["550",
    "100",
    "252",
    "72",
    "End"
])