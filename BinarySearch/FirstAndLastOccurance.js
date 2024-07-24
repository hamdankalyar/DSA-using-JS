function firstOccurance(arr, x) {
    let low = 0;
    let high = arr.length - 1
    let mid;
    let ans = - 1
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2)

        if (arr[mid] == x) {
            ans = mid

        }

        if (arr[mid] > x || arr[mid] == x) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return ans
}
function lastOccurance(arr, x) {
    let low = 0;
    let high = arr.length - 1
    let mid;
    let ans = - 1
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2)

        if (arr[mid] == x) {
            ans = mid

        }

        if (arr[mid] > x) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return ans
}
console.log("First occurance : ", firstOccurance([3, 4, 4, 5], 1))
console.log("Last occurance : ", lastOccurance([3, 4, 4, 4], 4))