function examPreparation(input) {
    let index = 0;
    let countNegGrades = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let sumGr = 0;
    let problems = 0
    let isNeedABreak = false;
    let lastProblem = "";
    while (command !== "Enough") {
        let taskName = command;
        lastProblem = taskName;
        let grade = Number(input[index]);
        index++;
        problems++;
        sumGr += grade;
        if (grade <= 4) {
            counter++
        }
        if (counter === countNegGrades) {
            console.log(`You need a break, ${counter} poor grades.`)
            isNeedABreak = true
            break;
        }
        command = input[index];
        index++;
    }
    if (!isNeedABreak) {
        let avg = sumGr / problems
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${problems}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
