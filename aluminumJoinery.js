function aluminumJoinery(input) {
    let windowsCount = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0
    
    switch (type) {
        case "90X130":
            price = 110;
            if (windowsCount > 30 && windowsCount<= 60) {
                price = price - (price * 0.05)
            } else if (windowsCount > 60) {
                price = price - (price * 0.08)
            }
            break;
        case "100X150":
            price = 140;
            if (windowsCount > 40&& windowsCount<= 80) {
                price = price - (price * 0.06)
            } else if (windowsCount > 80) {
                price = price - (price * 0.10)
            }
            break;
        case "130X180":
            price = 190;
            if (windowsCount > 20&& windowsCount<= 50) {
                price = price - (price * 0.07)
            } else if (windowsCount > 50) {
                price = price - (price * 0.12)
            }
            break;
        case "200X300":
            price = 250;
            if (windowsCount > 25&& windowsCount<= 50) {
                price = price - (price * 0.09)
            } else if (windowsCount > 50) {
                price = price - (price * 0.14)
            }
            break;
    }
    let finalPrice = price * windowsCount
    if(delivery === "With delivery"){
        finalPrice+=60
    }
    if(windowsCount>99){
        finalPrice = finalPrice - (finalPrice * 0.04)
    }
    
    if(windowsCount<10){
        console.log(`Invalid order`)
    }else{
        console.log(`${finalPrice.toFixed(2)} BGN`)
    }
    
}
aluminumJoinery(["40", 
"90X130",
"Without delivery"])
