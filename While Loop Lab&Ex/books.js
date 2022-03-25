function test(input) {
    let book = input[0]
    let index = 1
    let currentBook = input[index]
    let count = 0
    let isFound = false
    while (currentBook !== book) {
        let tempBook = currentBook
        if (tempBook === "No More Books") {
            console.log(`The book you search is not here!`)
            isFound = true
            break;
        }
        count += 1;
        index++
        currentBook = input[index]
    }
    if (currentBook === book) {
        console.log(`You checked ${count} books and found it.`)
    }
    if (isFound) {
        console.log(`You checked ${count} books.`)
    }
}
test(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])