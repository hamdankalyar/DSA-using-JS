function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let temp = arr[i]
        for (; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
            }
            else {
                break
            }
        }
        arr[j + 1] = temp
    }
}
let arr = [5, 3, 4, 1, 2]
insertionSort(arr)
console.log(arr)