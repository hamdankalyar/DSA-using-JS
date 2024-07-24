// Problem Statement
// You are given an array of integers arr that represents a mountain array. A mountain array is defined as an array where:

// Conditions:
// arr.length >= 3
// There exists some index i (0 < i < arr.length - 1) such that:
// arr[0] < arr[1] < ... < arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Your task is to find the index i of the peak element arr[i] in the mountain array. The peak element is the element that is greater than both its left and right neighbors.

// Example:
// text
// Copy code
// Input: arr = [0, 2, 3, 4, 5, 3, 1]
// Output: 4

// Explanation: The peak element is 5 at index 4.

// Input: arr = [0, 10, 5, 2]
// Output: 1

// Explanation: The peak element is 10 at index 1.
// Constraints:
// The array must have at least three elements (arr.length >= 3).
// The peak element must have at least one element on both its left and right sides.
// There must be exactly one peak element.


function FindPeakOfMountain(arr) {
    let low = 0
    let high = arr.length - 1
    let mid
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2)
        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }
    return high
}
console.log("Find at the index : ", FindPeakOfMountain([0, 2, 3, 4, 5, 3, 1]))
console.log("Find at the index : ", FindPeakOfMountain([0, 2, 3, 4, 5, 3, 1]))