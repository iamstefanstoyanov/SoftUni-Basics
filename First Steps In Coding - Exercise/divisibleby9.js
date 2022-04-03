function divisibleby9(input) {
    let startN = Number(input[0]);
    let endN = Number(input[1]);
    let sum = 0
    for (let i = startN; i <= endN; i++) {
        if (i % 9 == 0) {
            sum += i;
        }
    }
    console.log("The sum: " + sum)
    for (let i = startN; i <= endN; i++) {
        if (i % 9 === 0) {
            console.log(i)
        }
    }
}
divisibleby9([1, 10])

//res += i +"\n"//нов ред