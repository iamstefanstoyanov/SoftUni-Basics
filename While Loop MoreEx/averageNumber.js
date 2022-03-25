function averageNumber(input) {
    let n = Number(input[0]);
    let index = 1;
    let num = Number(input[index]);
    index++
    let count = 0
    let sum = 0
    while (count < n) {
        count++;
        sum+=num;
        num = Number(input[index]);
        index++;
    }
    let x = sum/n
    console.log(x.toFixed(2))
}
averageNumber(["4","3","2","4","2"])
