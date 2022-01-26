function cinema(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let people = input[index++];
    let isFull = false;
    let seats = 0
    let income = 0
    while (people !== "Movie time!" && !isFull) {
        let nextSeats = Number(people)
        if ((seats + nextSeats) > capacity) {
            isFull = true;
            break;
        }
        let num = Number(people)
        if (num % 3 === 0) {
            seats += num
            income += (num * 5) - 5
            people = input[index++];
            continue;
        }
        seats += num
        income += num * 5
        people = input[index++];
    }
    let seatsLeft = capacity - seats
    if (isFull) {
        console.log(`The cinema is full.`)
    } else {
        console.log(`There are ${seatsLeft} seats left in the cinema.`)
    }
    console.log(`Cinema income - ${income} lv.`)
}
cinema
(["50",
"15",
"10",
"10",
"15",
"5"])
