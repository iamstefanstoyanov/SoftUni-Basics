function maxNum(input) {
    let inputElement = input[0];
    let index = 1;
    let max = []
    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        max.push(num)
        inputElement = input[index];
        index++;
    }
    console.log(Math.max(...max));

}
maxNum(["120",
"99",
"80",
"70",
"Stop"])
