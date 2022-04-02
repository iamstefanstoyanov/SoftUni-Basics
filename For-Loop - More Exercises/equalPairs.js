function solve(input) {
    let pairsCount = Number(input.shift());
    let maxDifference = 0;
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let previousSum = firstNum + secondNum;
    for (let i = 1; i < pairsCount; i++) {
        firstNum = Number(input.shift());
        secondNum = Number(input.shift());
        let currentSum = firstNum + secondNum;
        let currentDifference = Math.abs(currentSum - previousSum);
        if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
        }
        previousSum = currentSum;
    }
    console.log(maxDifference ? `No, maxdiff=${maxDifference}` : `Yes, value=${previousSum}`);
}
solve(["3", "1", "2", "0", "3", "4", "-1"])
//(["3","1","2","0","3","4","-1"])
//(["4","1","1","3","1","2","2","0","0"])
//(["2","-1","0","0","-1"])
//(["2","1","2","2","2"])
//(["1","5","5"])
//(["2","-1","2","0","-1"])