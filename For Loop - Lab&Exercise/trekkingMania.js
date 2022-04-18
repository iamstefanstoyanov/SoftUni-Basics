function trekkingMania(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;
    for (let i = 0; i < count; i++) {
        let countPeople = Number(input[index]);
        index++;
        total += countPeople;
        if (countPeople <= 5) {
            musala += countPeople
        } else if (countPeople >= 6 && countPeople <= 12) {
            montblanc += countPeople
        } else if (countPeople >= 13 && countPeople <= 25) {
            kilimanjaro += countPeople;
        } else if (countPeople >= 26 && countPeople <= 40) {
            k2 += countPeople
        } else {
            everest += countPeople;
        }
    }
    let musalaPr = musala / total * 100;
    let montblancPr = montblanc / total * 100;
    let kilimanjaroPr = kilimanjaro / total * 100;
    let k2Pr = k2 / total * 100;
    let everestPr = everest / total * 100;

    console.log(musalaPr.toFixed(2) + "%")
    console.log(montblancPr.toFixed(2) + "%")
    console.log(kilimanjaroPr.toFixed(2) + "%")
    console.log(k2Pr.toFixed(2) + "%")
    console.log(everestPr.toFixed(2) + "%")
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
