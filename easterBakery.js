function easterBakery(input) {
    let n = Number(input[0]);
    let index = 1;
    let sugar = Number(input[index++]);
    let flour = Number(input[index++]);
    let quantSugar = 0;
    let quantFlour = 0;
    let mostSugar = 0
    let mostFlour = 0
    for (let i = 0; i < n; i++) {
        quantSugar+=sugar
        quantFlour+=flour
        if(sugar>mostSugar){
            mostSugar=sugar
        }
        if(flour>mostFlour){
            mostFlour=flour
        }
        sugar = Number(input[index++]);
        flour = Number(input[index++]);
        
    }
    let packsSugar = Math.ceil(quantSugar/950)
    let packsFlour = Math.ceil(quantFlour/750)
    console.log(`Sugar: ${packsSugar}`)
    console.log(`Flour: ${packsFlour}`)
    console.log(`Max used flour is ${mostFlour} grams, max used sugar is ${mostSugar} grams.`)
}
easterBakery(["4","500","350","560","430","600","345","578","543"])