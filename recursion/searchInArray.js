function searchInArray(arr, index, ele) {
    // Base case: If index reaches the length of the array, return -1 to indicate element not found
    if (index === arr.length) {
        return -1;
    }

    // Check if the current element matches the target element
    if (arr[index] === ele) {
        return index;
    }

    // Recursive case: Move to the next index
    return searchInArray(arr, index + 1, ele);
}

// Test case
console.log(searchInArray([1], 0, 1)); // Expected output: 1
