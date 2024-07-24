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
