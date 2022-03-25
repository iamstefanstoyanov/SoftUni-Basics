function num1to100by3() {
    let n = 1
    while (n < 100) {
        if (n % 3 === 0) {
            console.log(n);
        }
        n++;
    }
}
num1to100by3()