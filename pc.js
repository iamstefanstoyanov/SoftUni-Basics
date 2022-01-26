function pc(input){
let cpuPrice = Number(input[0]);
let vgaPrice = Number(input[1]);
let ramPrice = Number(input[2]);
let ramCount = Number(input[3]);
let discount = Number(input[4]);
let cpuInLv = cpuPrice  * 1.57;
let vgaInLv = vgaPrice * 1.57;
let ramInLv = ramPrice * 1.57;
let ramPriceFinal = ramInLv * ramCount
let cpuPriceDisc =cpuInLv - (cpuInLv * discount);
let vgaPriceDisc =vgaInLv - (vgaInLv * discount);
let total = ramPriceFinal+cpuPriceDisc + vgaPriceDisc
console.log(`Money needed - ${total.toFixed(2)} leva.`)
}
pc
(["200",
"100",
"80",
"1",
"0.01"])


