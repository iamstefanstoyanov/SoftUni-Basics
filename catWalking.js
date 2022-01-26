function catWalk(input){
let minPerDay = Number(input[0]);
let walkCount = Number(input[1]);
let calPerDay = Number(input[2]);
let burnedCal = minPerDay * walkCount * 5
let calTarget = calPerDay * 0.5;
if(calTarget<=burnedCal){
console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCal}.`)
}else{
console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCal}.`)
}
}
catWalk(["40",
"2",
"300"])


