function calculator(input){
    let name = input[0]
    let seasons = Number(input[1])
    let episodes = Number(input[2])
    let ordEpisoe = Number(input[3])
    let adDurution = ordEpisoe * 0.2
    let episodeWithAd = ordEpisoe + adDurution
    let addTimeFromSpEp = seasons * 10
    let time = episodeWithAd * episodes * seasons +addTimeFromSpEp
    console.log(`Total time needed to watch the ${name} series is ${time} minutes.`)
}
