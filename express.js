function examtask(input) {
    let parcelInKg = Number(input[0]);
    let type = input[1];
    let distanceInKilometer = Number(input[2]);
    let pricePerKm = 0
    let pricePerKg = 0
    let addExp = 0

    switch (type) {
        case "standard":
            if (parcelInKg < 1) {
                pricePerKm = 0.03
            } else if (parcelInKg >= 1 && parcelInKg < 10) {
                pricePerKm = 0.05
            } else if (parcelInKg >= 10 && parcelInKg < 40) {
                pricePerKm = 0.10
            } else if (parcelInKg >= 40 && parcelInKg < 90) {
                pricePerKm = 0.15
            } else {
                pricePerKm = 0.20
            };
            break;
        case "express":
            if (parcelInKg < 1) {
                pricePerKg = 0.03
                addExp = pricePerKg * 0.8
            } else if (parcelInKg >= 1 && parcelInKg < 10) {
                pricePerKg = 0.05
                addExp = pricePerKg * 0.4
            } else if (parcelInKg >= 10 && parcelInKg < 40) {
                pricePerKg = 0.10
                addExp = pricePerKg * 0.05
            } else if (parcelInKg >= 40 && parcelInKg < 90) {
                pricePerKg = 0.15
                addExp = pricePerKg * 0.02
            } else {
                pricePerKg = 0.20
                addExp = pricePerKg * 0.01
            };
            break;
    }
    if(type === "standard"){
        let price = distanceInKilometer * pricePerKm
        console.log(`The delivery of your shipment with weight of ${parcelInKg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`)
    }else{
        let priceExp = distanceInKilometer * pricePerKg
        let addExpPerKm = parcelInKg * addExp
        let totalAddExp = distanceInKilometer * addExpPerKm
        let total = totalAddExp + priceExp
        console.log(`The delivery of your shipment with weight of ${parcelInKg.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`)
    }

}
examtask(["1.5", "standard", "100"])