function pastryShop(input) {
    let pastry = input[0];
    let pastryCount = Number(input[1]);
    let day = Number(input[2]);
    let price = 0;
    switch (pastry) {
        case "Cake":
            if (day <= 15) {
                price = pastryCount * 24;
            } else {
                price = pastryCount * 28.70;
            };
            break;
        case "Souffle":
            if(day<=15){
                price = pastryCount * 6.66;
            }else{
                price = pastryCount *9.8;
            }
            ;
            break;
        case "Baklava":
            if(day<=15){
                price = pastryCount * 12.6;
            }else{
                price = pastryCount *16.98;
            }
            ;
            break;
    }if(day<=22){
        if (price >= 100 && price <= 200) {
            price = price * 0.85;
        } else if (price > 200) {
            price = price * 0.75;
        } else {
            price = price;
        }
    }
    if(day<=15){
        price = price *0.9;
    }
    console.log(price.toFixed(2));
    
}
pastryShop(["Cake",
"5",
"12"])



