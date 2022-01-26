function processors(input){
let cpuCount = Number(input[0]);
let employeeCount = Number(input[1]);
let days = Number(input[2]);
let hours = employeeCount*days*8
let produce = Math.floor(hours/3)
let diff = Math.abs(cpuCount-produce)
let total = diff*110.1
if(produce<cpuCount){
console.log(`Losses: -> ${total.toFixed(2)} BGN`)
}else{
    console.log(`Profit: -> ${total.toFixed(2)} BGN`)
}
}
processors(["150",
"7",
"18"])
