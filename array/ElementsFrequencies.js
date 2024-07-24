export function ElementsFrequencies(array) {
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
// console.log(ElementsFrequencies([1, 2, 2, 2, 5, 5, 5, 5]))
