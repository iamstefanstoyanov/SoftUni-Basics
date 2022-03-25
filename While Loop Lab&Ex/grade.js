function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4.00) {
            excluded++
            if (excluded >= 1) {
                console.log(`${name} has been excluded at ${grades} grade`)
            }
            break;
        }
        sum += grade
        grades++
    }
    let average = sum / 12;
    if(excluded !== 1){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
    

}
function test(input) {
    let name = input[0]
    let index = 1
    let res = Number(input[index]);
    let sum = 0
    let grade = 0
    let isNotExcluded = true
    while (isNotExcluded) {
        if (grade >= 12) {
            break;
        }
        grade += 1
        if (res < 4) {
            isNotExcluded = false
            console.log(`${name} has been excluded at ${grade} grade`)
            break;
        }
        let currentGrade = res
        sum += currentGrade
        index++
        res = Number(input[index])
    }
    if (isNotExcluded) {
        let avgRes = sum / grade
        console.log(`${name} graduated. Average grade: ${avgRes.toFixed(2)}`)
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

