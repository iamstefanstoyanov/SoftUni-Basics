function exam(input) {
    let students = Number(input[0]);
    let index = 1;

    let topSt = 0
    let goodSt = 0
    let avgSt = 0
    let failSt = 0
    let avgGrade = 0

    for (let i = 1; i <= students; i++) {
        let grade = Number(input[index])
        index++
        avgGrade += grade
        if (grade >= 5) {
            topSt += 1
        } else if (grade >= 4 && grade <= 4.99) {
            goodSt += 1
        } else if (grade >= 3 && grade <= 3.99) {
            avgSt += 1
        } else {
            failSt += 1
        }
    }
    let topPercent = topSt / students * 100
    let good = goodSt / students * 100
    let average = avgSt / students * 100
    let fail = failSt / students * 100
    let avgTotal = avgGrade / students

    console.log(`Top students: ${topPercent.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${good.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${average.toFixed(2)}%`)
    console.log(`Fail: ${fail.toFixed(2)}%`)
    console.log(`Average: ${avgTotal.toFixed(2)}`)

}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
