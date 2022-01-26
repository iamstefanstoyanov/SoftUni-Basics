function changeBureau(input){
let bitcoin = Number(input[0])
let yena = Number(input[1])
let commission = Number(input[2])
let bitcoinPrice = 1168//lv
let yenaPrice = 0.15//dolara
let dollar = 1.76//leva
let euro = 1.95//leva
let trans1 = yena*yenaPrice
let trans2 = trans1 * dollar
let totalInEuro = (bitcoin*bitcoinPrice + trans2)/euro
let tax = (totalInEuro * commission) /100
let final = totalInEuro - tax
console.log(final.toFixed(2))

}changeBureau(["7","50200.12","3"])