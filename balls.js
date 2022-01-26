function balls(input) {
    let count = Number(input[0]);
    let index = 1
    let colour = input[index]
    index++
    let points = 0
    let redB = 0
    let ogrB = 0
    let yelB = 0
    let whiB = 0
    let otherB = 0
    let deviBB = 0
    let isHaveBalls = true
    while (isHaveBalls) {
        count--
        if (colour !== "red" && colour !== "orange" && colour !== "yellow" && colour !== "white" && colour !== "black") {
            otherB++
        }
        if (colour === "red" || colour === "orange" || colour === "yellow" || colour === "white" || colour === "black") {
            switch (colour) {
                case "red":
                    points += 5;
                    redB++
                    break;
                case "orange":
                    points += 10;
                    ogrB++
                    break;
                case "yellow":
                    points += 15;
                    yelB++
                    break;
                case "white":
                    points += 20;
                    whiB++
                    break;
                case "black":
                    deviBB++
                    points = Math.floor(points / 2);
                    break;
            }

        }
        if(count<=0){
            isHaveBalls = false
        }
        colour = input[index]
        index++
    }




    console.log(`Total points: ${points}`)
    console.log(`Red balls: ${redB}`)
    console.log(`Orange balls: ${ogrB}`)
    console.log(`Yellow balls: ${yelB}`)
    console.log(`White balls: ${whiB}`)
    console.log(`Other colors picked: ${otherB}`)
    console.log(`Divides from black balls: ${deviBB}`)

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
