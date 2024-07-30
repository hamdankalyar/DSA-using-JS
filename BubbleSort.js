
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(j, j + 1, arr)
//             }
//         }
//     }
// }

// optimised Solution 
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
                swapped = true
            }
        }
        if (!swapped) {
            break
        }
    }
}

let array = [6, 1, 10, 2, 8, 0, -1]
function swap(a, b, arr) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
bubbleSort(array)
console.log(array) 