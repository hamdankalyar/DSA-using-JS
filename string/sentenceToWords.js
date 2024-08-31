function breakingSentenceIntoWords(sen) {
    let word = ''
    let result = []
    for (let i = 0; i < sen.length; i++) {
        if (sen[i] !== ' ') {
            word = word + sen[i]
        }
        else {
            if (word) {
                console.log("word", word)
                result.push(word)
                word = ''
            }
        }
        if (i == sen.length - 1) {
            console.log("word", word)
            result.push(word)
        }

    }

    return result;
}
console.log(findPanilWords("man is fun"))