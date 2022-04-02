function leftandRightSum(input) {
    let count = Number(input[0]);
    let index = 1;
    let num = Number(input[index]);
    index++;
    let left = 0;
    let right = 0;
    for (let i = 0; i < count; i++) {
        left += num
        num = Number(input[index]);
        index++;
    }
    for (let j = 0; j < count; j++) {
        right += num
        num = Number(input[index]);
        index++;
    }
    if(left === right){
        console.log(`Yes, sum = ` + left)
    }else{
        let diff = Math.abs(left-right)
        console.log(`No, diff = ` + diff)
    }
}
leftandRightSum(["2", "90", "9", "50", "50"])