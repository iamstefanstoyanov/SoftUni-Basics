function filmingDay(input){
    let shootingTime = Number(input[0]);
    let sceens = Number(input[1]);
    let timePerSceen = Number(input[2])
    let preparation = shootingTime * 0.15;
    let length = timePerSceen * sceens
    let total = length + preparation
    let diff = Math.abs(shootingTime - total)
    if(shootingTime>=total){
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`)
    }else{
        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`)
    }
}
filmingDay(["60","15","3"])