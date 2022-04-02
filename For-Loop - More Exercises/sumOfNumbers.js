function sumOfNumbers(input) {
    let n = Number(input[0])
    let index = 1
    let num = Number(input[index])
    index++
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += num
        num = Number(input[index])
        index++
    }
    console.log(sum)
}
sumOfNumbers(["0"])