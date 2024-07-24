function ElementsFrequencies(array) {
    let arrayFrequency = {}
    for (let i = 0; i < array.length; i++) {
        if (arrayFrequency.hasOwnProperty(array[i].toString())) {

            arrayFrequency[array[i]] = arrayFrequency[array[i]] + 1
        }
        else {
            arrayFrequency[array[i]] = 1
        }

    }

    return arrayFrequency;
}
console.log(ElementsFrequencies([1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]))
let array = ElementsFrequencies([1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]);



function HaveUniqueFrequencies(arrayFrequency) {

    let isUnique = true
    let frequenciesOfNo = Object.entries(arrayFrequency)
    for (let key in arrayFrequency) {

        for (let i = 0; i < frequenciesOfNo.length; i++) {
            // console.log(typeof Number(key))
            if (key != frequenciesOfNo[i][0]) {
                // console.log("here it the key",Number(key),"this is the frequenciesOfNo[i][0]", frequenciesOfNo[i][0])
                // console.log("Statement Number(key)!==frequenciesOfNo[i][0]",Number(key)!==frequenciesOfNo[i][0])
                if (arrayFrequency[key] == frequenciesOfNo[i][1]) {
                    isUnique = false
                    break
                }
            }

        }
    }
    return isUnique
}

console.log(HaveUniqueFrequencies(array))
