
import { ElementsFrequencies } from './ElementsFrequencies.js'

console.log(ElementsFrequencies([1, 2, 2, 2, 5, 5, 5, 5]));
let arrayFrequency = ElementsFrequencies([1, 2, 2, 2, 5, 5, 5, 5]);
function FindDuplicates(arrayFrequency) {

    let uniqueElements = []

    for (let key in arrayFrequency) {
        if (arrayFrequency[key] > 1) {
            uniqueElements.push(key)
        }
    }
    return uniqueElements;
}
console.log(FindDuplicates(arrayFrequency))


