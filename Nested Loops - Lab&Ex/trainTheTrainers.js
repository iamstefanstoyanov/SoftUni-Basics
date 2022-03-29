function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++
    let command = input[index];
    index++

    let sumGrade = 0
    let count = 0
    while (command !== "Finish") {
        let name = command
        let tempSumGrade = 0
        count++
        for (let i = 0; i < people; i++) {
            let tempGrade = Number(input[index])
            index++
            tempSumGrade += tempGrade
        }
        let tempAvgGrade = tempSumGrade / people
        sumGrade+=tempAvgGrade
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`)
        command = input[index]
        index++
    }
    let avgGrade = sumGrade/count
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])

    function test(input) {
        let juryCount = Number(input[0]);
        let index = 1
        let text = input[index];
        index++
        let gradeTotal = 0
        let count =0
        while (text !== "Finish") {
            let job = text
            let grade = 0
            for (let i = 0; i < juryCount; i++) {
                grade += Number(input[index])
                gradeTotal+=Number(input[index])
                count++
                index++
            }
            let avgGrade = grade / juryCount
            console.log(`${job} - ${avgGrade.toFixed(2)}.`)
            job = ""
            grade = 0
            text = input[index];
            index++
        }
        let finalAs = gradeTotal/count
        console.log(`Student's final assessment is ${finalAs.toFixed(2)}.`)
    }
