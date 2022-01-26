function energyBooster(input) {
    let type = input[0];
    let size = input[1];
    let order = Number(input[2]);
    let price = 0
    switch (type) {
        case "Watermelon":
            if (size === "small") {
                price = order * 56 * 2
            } else {
                price = order * 28.70 * 5
            };
            break;
        case "Mango":
            if (size === "small") {
                price = order * 36.66 * 2
            } else {
                price = order * 19.60 * 5
            };
            break;
        case "Pineapple":
            if (size === "small") {
                price = order * 42.10 *2
            } else {
                price = order * 24.8 * 5
            };
            break;
        case "Raspberry":
            if (size === "small") {
                price = order * 20 * 2
            } else {
                price = order * 15.20 * 5
            };
            break;
    }
    if (price >= 400 && price <= 1000) {
        price = price * 0.85
    } else if (price > 1000) {
        price = price * 0.5
    } else {
        price = price
    }
    console.log(`${price.toFixed(2)} lv.`)

}
energyBooster(["Mango",
"big",
"8"])



