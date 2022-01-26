function favoriteMovie(input) {
    let index = 0;
    let name = input[index++];
    let bestMovieName;
    let points = 0
    let movies = 0
    while (name !== "STOP") {
        movies++
        if(movies>=7){
            console.log(`The limit is reached.`)
            break;
        }
        let nameLength = Number(name.length)
        let tempPoints = 0
        for (let i = 0; i < nameLength; i++) {
            let letter = name.charAt(i)
            let tempSum = letter.charCodeAt(0)
            if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
                tempSum -= nameLength
            } else if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
                tempSum -= (nameLength * 2)
            }
            tempPoints += tempSum
        }
        if (tempPoints > points) {
            bestMovieName = name
            points = tempPoints
            tempPoints = 0
        }
        name = input[index++];
    }
    console.log(`The best movie for you is ${bestMovieName} with ${points} ASCII sum.`)
}
favoriteMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"])
