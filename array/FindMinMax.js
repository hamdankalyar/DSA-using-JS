
// -------------------------- find min and max in array --------------------------

// let array = [-1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 100]
let array = [3, 4, 1]
// 3,4,1
function findMin(array) {
    let min = Infinity
    let secondMin = Infinity
    array.forEach(element => {
        if (min > element) {
            secondMin = min
            min = element

        }
        else if (secondMin > element && element !== min) {
            secondMin = element
        }
    })
    return [min, secondMin]
}

console.log("Min number and second min in the array", findMin(array));
// 2,3,4 
function findMax(array) {
    let max = -Infinity
    let secondMax = -Infinity
    array.forEach(element => {
        if (max < element) {
            secondMax = max
            max = element
        }
        else if (secondMax < element && element !== max) {
            secondMax = element
        }
    })
    return [max, secondMax]
}
console.log("Max number and second max in the array", findMax(array));


// -------------------------- find the 8 is in the power of 2 ----------------




// -------------------------- find unique in the array  -----------------------------
// let array = [1, 2, 3, 1, 2]
// function findUniqueElementsInArray(array) {
//     let uniqueElements = [];

//     array.forEach(element => {

//         let found = false;
//         for (let index = 0; index < array.length; index++) {
//             if (element === array[index]) {
//                 found = true;
//                 break; // Exit the loop early since we found a match
//             }
//         }
//         if (!found) {
//             uniqueElements.push(element);
//         }
//     });
//     return uniqueElements
// }

// console.log("Unique elements in the array", findUniqueElementsInArray(array))

