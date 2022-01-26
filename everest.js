function everest(input) {
    let index = 0;
    let yesOrNo = input[index++];
    
    let everest = 8848;
    let base = 5364;
    let daysRest = 1;
    let isReached = false;
    while (yesOrNo !== "END") {
            if (yesOrNo === "Yes") {
                daysRest++
                if(daysRest>5){
                    break;
                }
            }
            let metersClimbed = Number(input[index++]);
            yesOrNo = input[index++];
            base += metersClimbed
        if(base>=everest){
            isReached = true
            break;
        }
    }
    if (isReached) {
        console.log(`Goal reached for ${daysRest} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${base}`);
    }
}
everest(["Yes",
"700",
"END"])












