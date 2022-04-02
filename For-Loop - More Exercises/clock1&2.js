function clock() {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++)
            for (let m = 0; m < 60; m++)
                console.log(`${i} : ${j} : ${m}`)
    }
}
clock()