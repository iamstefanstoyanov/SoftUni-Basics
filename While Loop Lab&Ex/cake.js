function cake(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let cakeSize = w *l;
    let command = input[index];
    index++;
    let isHaveCake = true
    while(command !== "STOP"){
        let pieces = Number(command)
        cakeSize -= pieces;
        if(cakeSize <0){
            isHaveCake = false
            break;
        }
        command=input[index];
        index++;
    }
    if(isHaveCake){
        console.log(`${cakeSize} pieces are left.`)
    }else{
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])