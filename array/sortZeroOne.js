function sortZeroOne(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        // Move i forward while it points to 0
        while (i < arr.length && arr[i] === 0) {
            i++;
        }

        // Move j backward while it points to 1
        while (j >= 0 && arr[j] === 1) {
            j--;
        }

        // Swap elements if i is less than j
        if (i < j) {
            swap(arr, i, j);
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
sortZeroOne(arr);
console.log(arr); // Output should be [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]


function swappingAlternates(arr) {
    // put pointer on the start
    let start = 0;
    // put pointer on the end
    let end = arr.length - 1;

    // Function to swap elements at indices i and j in array arr
    function swap(i, j, arr) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while (start < end) {
        // check if the start has 1 and the end has 0, then swap
        if (arr[start] == 1 && arr[end] == 0) {
            swap(start, end, arr);
            start++;
            end--;
        } else if (arr[start] == 0 && arr[end] == 1) {
            // Both are in correct places, move on
            start++;
            end--;
        } else if (arr[start] == 1 && arr[end] == 1) {
            // Decrease end pointer if both are 1
            end--;
        } else if (arr[start] == 0 && arr[end] == 0) {
            // Increase start pointer if both are 0
            start++;
        }
    }
    return arr;
}

let arr = [1, 0, 1, 0, 1, 0, 1, 0];
console.log(swappingAlternates(arr)); // Expected output: [0, 0, 0, 0, 1, 1, 1, 1]
