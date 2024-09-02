function binarySearch(arr, low, high, ele) {
    if (low > high) {
        return -1
    }
    let mid = low + Math.floor((high - low) / 2)

    if (arr[mid] === ele) {
        return mid
    }

    if (ele > arr[mid]) {
        low = mid + 1
    }
    else {
        high = mid - 1
    }
    return binarySearch(arr, low, high, ele)
}
console.log(binarySearch([1, 2, 3, 4], 0, 3, 3))