function isSorted(arr, index = 0) {
    // Base case: If the index reaches the second to last element, the array is sorted
    if (index >= arr.length - 1) {
        return true;
    }

    // Check if the current element is greater than the next element
    if (arr[index] > arr[index + 1]) {
        return false;
    }

    // Recursive case: Move to the next pair of elements
    return isSorted(arr, index + 1);
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false
console.log(isSorted([5])); // true (single element array is considered sorted)
console.log(isSorted([]));  // true (empty array is considered sorted)
