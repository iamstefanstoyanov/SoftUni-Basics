function mParty(input) {
    let mParty = Number(input[0]);
    let loveWishes = Number(input[1]);
    let roses = Number(input[2]);
    let keyholders = Number(input[3]);
    let caricat = Number(input[4]);
    let luckSurprice = Number(input[5]);
    let count = loveWishes + roses + keyholders + caricat + luckSurprice
    let income = (loveWishes * 0.6) + (roses * 7.2) + (keyholders * 3.6) + (caricat * 18.2) + (luckSurprice * 22)
    if(count>=25){
        income = income * 0.65
    }
    let finalPrice = income * 0.9
    let diff = Math.abs(mParty-finalPrice)
    if(mParty<=finalPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
mParty(["320",
"8",
"2",
"5",
"5",
"1"])
