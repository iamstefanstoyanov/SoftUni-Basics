function oscars(input){
let rent = Number(input[0])
let statuetki = rent*0.7
let catering = statuetki *0.85
let sound = catering / 2
let total = rent + statuetki + catering + sound
console.log(total.toFixed(2))
}
oscars([3500])