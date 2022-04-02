function oddEvenPosition(input) {
    let numCount = Number(input[0]);
    let index = 1;
    let oddSum = 0
    let evenSum = 0
    let odds = []
    let evens = []
    for (let i = 1; i <= numCount; i++) {
        let number = Number(input[index])
        index++
        if (i % 2 === 0) {
            evens.push(number)
            evenSum += number
        } else {
            odds.push(number)
            oddSum += number
        }
    }
    let oddsNo ;
    let evensNo ;
    if (evenSum === 0) {
        evensNo = "No"
    }
    if (oddSum === 0) {
        oddsNo = "No"
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`)
    console.log(oddsNo ? `OddMin=No,` : `OddMin=${Math.min(...odds).toFixed(2)},`)
    console.log(oddsNo ? `OddMax=No,` : `OddMax=${Math.max(...odds).toFixed(2)},`)
    console.log(`EvenSum=${evenSum.toFixed(2)},`)
    console.log(evensNo ? `EvenMin=No,`: `EvenMin=${Math.min(...evens).toFixed(2)},`)
    console.log(evensNo ? `EvenMax=No` : `EvenMax=${Math.max(...evens).toFixed(2)}`)
}
oddEvenPosition(["1","1"])