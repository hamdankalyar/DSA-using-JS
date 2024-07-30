function sort(arr) {
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        swap(i, min, arr)
    }
}
function swap(a, b, arr) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
let arr = [5, 3, 8, 4, 2]
sort(arr)
console.log(arr) // [2, 3, 4, 5, 8]