function numberSequence(input) {
    let count = Number(input[0])
    let index = 1;
    let num = Number(input[index]);
    index++
    let arr = []
    for (let i = 0; i < count; i++) {
        arr.push(num)
        num = Number(input[index]);
        index++
    }

    console.log(`Max number: ` + Math.max(...arr))
    console.log(`Min number: ` + Math.min(...arr))
}
numberSequence(["5","10","20","304","0","50"])