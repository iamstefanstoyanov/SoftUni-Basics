function filmPremiere(input) {
    let movie = input[0];
    let offer = input[1];
    let tickets = Number(input[2]);
    let price = 0
    switch (movie) {
        case "John Wick":
            if (offer === "Drink") {
                price = tickets * 12
            } else if (offer === "Popcorn") {
                price = tickets * 15
            } else {
                price = tickets * 19
            };
            break;
        case "Star Wars":
            if (offer === "Drink") {
                if (tickets >= 4) {
                    let tempPrice = tickets * 18
                    price = tempPrice * 0.7
                    break;
                }
                price = tickets * 18
            } else if (offer === "Popcorn") {
                if (tickets >= 4) {
                    let tempPrice = tickets * 25
                    price = tempPrice * 0.7
                    break;
                }
                price = tickets * 25
            } else {
                if (tickets >= 4) {
                    let tempPrice = tickets * 30
                    price = tempPrice * 0.7
                    break;
                }
                price = tickets * 30
            };
            break;
        case "Jumanji":
            if (offer === "Drink") {
                if (tickets == 2) {
                    let tempPrice = tickets * 9
                    price = tempPrice * 0.85
                    break;
                }
                price = tickets * 9
            } else if (offer === "Popcorn") {
                if (tickets == 2) {
                    let tempPrice = tickets * 11
                    price = tempPrice * 0.85
                    break;
                }
                price = tickets * 11
            } else {
                if (tickets == 2) {
                    let tempPrice = tickets * 14
                    price = tempPrice * 0.85
                    break;
                }
                price = tickets * 14
            };
            break;
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`)
}
filmPremiere(["Jumanji",
"Menu",
"2"])

