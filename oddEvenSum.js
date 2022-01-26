function oddEvenSum(input) {
    let count = Number(input[0]);
    let index = 1;
    let num = Number(input[index]);
    index++;
    let firstPair = 0
    let secondPair = 0
    for (let i = 1; i <= count; i++) {
        if (i % 2 === 0) {
            secondPair += num
        } else {
            firstPair += num
        }
        num = Number(input[index]);
        index++;
    }
    if(firstPair === secondPair){
        console.log(`Yes`)
        console.log(`Sum = ` + firstPair)
    }else{
        let diff = Math.abs(firstPair-secondPair)
        console.log(`No`)
        console.log(`Diff = ` + diff)
    }

}
oddEvenSum(["3", "5", "8", "1"])