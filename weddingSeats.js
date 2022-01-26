function weddingSeats(input) {
    let lastSector = input[0];
    let rows = Number(input[1]);
    let seats = Number(input[2]);
    let lastSectorAsNum = lastSector.charCodeAt(0)
    let firstSec = 65
    let firstSeat = 97
    let tempSeats = firstSeat + seats
    let count = 0
    for (let i = firstSec; i <= lastSectorAsNum; i++) {
        for (let k = 1; k <= rows; k++) {
            if (k % 2 === 0) {
                tempSeats += 2
                for (let m = firstSeat; m < tempSeats; m++) {
                    count++
                    console.log(String.fromCharCode(i) + k + String.fromCharCode(m))
                }
                tempSeats -= 2
            } else {
                for (let m = firstSeat; m < tempSeats; m++) {
                    count++
                    console.log(String.fromCharCode(i) + k+ String.fromCharCode(m))
                }
            }
        }
        rows++

    }
    console.log(count)
}

weddingSeats(["C", "4", "2"])