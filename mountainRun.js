function mountainRun(input){
    let record = Number(input[0]);
    let distanceInMeters = Number(input[1])
    let timeForOneMeter = Number(input[2])
    let climbigTime = distanceInMeters * timeForOneMeter
    let delay = Math.floor(distanceInMeters / 50) * 30
    let totalTime = climbigTime + delay
    let diff = Math.abs(record-totalTime)
    if(record<=totalTime){
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    }else{
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    }
}
mountainRun(["1377",
"389",
"3"])

