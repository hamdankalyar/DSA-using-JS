function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2)

        if (arr[mid] == x) {
            return mid
        }

        if (arr[mid] > x) {
            high = mid - 1
        }
        else {

            low = mid + 1
        }
    }
    return -1
}

console.log("Find at the index : ", binarySearch([3, 4, 5], 3))