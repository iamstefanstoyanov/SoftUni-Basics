function logistic(input) {
    let loadCount = Number(input[0]);
    let index = 1
    let totalLoad = 0
    let vanLoad = 0
    let truckLoad = 0
    let trainLoad = 0
    for (let i = 1; i <= loadCount; i++) {
        let load = Number(input[index]);
        index++
        totalLoad += load
        if (load <= 3) {
            vanLoad += load
        } else if (load >= 4 && load <= 11) {
            truckLoad += load
        } else {
            trainLoad +=load
        }
    }
    let totalPrice = vanLoad * 200 + truckLoad * 175 + trainLoad * 120;
    let avgPrice = totalPrice / totalLoad
    let vanPr = vanLoad / totalLoad * 100
    let truckPr = truckLoad / totalLoad * 100
    let trainPr = trainLoad / totalLoad * 100
    console.log(avgPrice.toFixed(2))
    console.log(vanPr.toFixed(2) + "%")
    console.log(truckPr.toFixed(2) + "%")
    console.log(trainPr.toFixed(2) + "%")
}
logistic(["4", "1", "5", "16", "3"])
//(["4", "1", "5", "16", "3"])
//(["5", "2", "10", "20", "1","7"])