function everest(input) {
    let index = 0;
    let countOfDays = 1;
    let start = 5364;
    let final = 8848;
    let rest = input[index];
    while (rest != "END") {

        index++;
        if (rest == "Yes") {
            countOfDays++
            if (countOfDays > 5) {
                break;
            }
        }
        let meters = Number(input[index])
        index++;
        start += meters;

        if (start >= final) {
            break;
        }

        rest = input[index];
    }

    if (start >= final) {
        console.log(`Goal reached for ${countOfDays} days!`)
    } else {
        console.log(`Failed!`);
        console.log(start);
    }

}everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
