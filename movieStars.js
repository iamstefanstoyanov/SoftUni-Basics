function movieStars(input){
    let budget = Number(input[0]);
    let i = 1;
    let nameOrPrice = input[i++];
    let isHaveBudget = true;
    while(nameOrPrice!=="ACTION"){
        let actorLength = Number(nameOrPrice.length)
        if(actorLength>15){
            let price = budget * 0.2;
            if(budget<price){
                budget-=price;
                nameOrPrice = input[i++];
                isHaveBudget = false;
                break;
            }
            budget-=price
            nameOrPrice = input[i++];
        }else{
            nameOrPrice = Number(input[i++]);
            if(budget<nameOrPrice){
                budget-=nameOrPrice
                isHaveBudget = false;
                break;
            }
            budget-=nameOrPrice;
            nameOrPrice = input[i++];
        }
        if(budget<0){
            isHaveBudget = false;
            break;
        }
       

    }
    let diff =Math.abs(budget)
    if(isHaveBudget){
        console.log(`We are left with ${diff.toFixed(2)} leva.`)
    }else{
        console.log(`We need ${diff.toFixed(2)} leva for our actors.`)
    }
}
movieStars(["1000",
    "John Cena",
    "800",
    "Freddy Kim",
    "3000",
    "ACTION"])
