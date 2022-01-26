function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    index++;
    let whWord = "";
    let word = "";
    let c = false;
    let o = false;
    let n = false;
    while (command !== "End") {
        let l = command;
        if (!(l >= "A" && l <= "Z" || l >= "a" && l <= "z")) {
            command=input[index];
            index++
            continue;
          }
        switch (l) {
            case "c":
                if (c) {
                    word += l;
                }
                c = true;
                break;
            case "n":
                if (n) {
                    word += l;
                }
                n = true;
                break;
            case "o":
                if (o) {
                    word += l;
                }
                o = true;
                break;
        }
        if (c && o && n) {
            c = false;
            o = false;
            n = false;
            word += " ";
            whWord += word;
            word = "";
        }
        if (l !== "c" && (l !== "o") & (l !== "n")) {
            word += l;
        }
        command = input[index];
        index++;
    }
    console.log(whWord);
}

streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "?", "A", "D"  ,"End"])