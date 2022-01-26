function book(input){
let priceForOnePage = Number(input[0]);
let priceForCover = Number(input[1]);
let discountPerPrint = Number(input[2]);
let priceDesigner = Number(input[3]);
let teamPercent = Number(input[4]);
let initialSum = priceForOnePage*899 + priceForCover*2
initialSum = initialSum - ((initialSum *discountPerPrint)/100)
initialSum+=priceDesigner
let finalPrice = initialSum-((initialSum*teamPercent)/100)
console.log(`Avtonom should pay ${finalPrice.toFixed(2)} BGN.`)
}book(["0.02",
"0.50",
"18",
"21",
"50"])
