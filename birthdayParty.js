function birthdayParty(input){
let rent = Number(input);
let cake = (rent * 20) / 100
let drinks = (cake * 55) /100
let animator = rent / 3
let price = animator + drinks + cake +rent
console.log(price.toFixed(1))
}
birthdayParty(["2250"])