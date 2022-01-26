function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let isPrime = 0;
    let isNotPrime = 0;
    while (command !== "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            isPrime += num;
            command = input[index];
            index++;
            continue;
        }
        let isPrimeNum = true
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrimeNum = false
            }
        }
        if (isPrimeNum) {
            isPrime += num
        } else {
            isNotPrime += num
        }
        command = input[index]
        index++

    }
    console.log(`Sum of all prime numbers is: ${isPrime}`)
    console.log(`Sum of all non prime numbers is: ${isNotPrime}`)
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])


