// -------------------------- Reverse the array  -----------------------------
let array = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
function reverseArray(array) {
    let startPtr = 0;
    let endPtr = array.length - 1
    let swaper;
    while (startPtr < endPtr) {

        swaper = array[startPtr]
        array[startPtr] = array[endPtr]
        array[endPtr] = swaper

        startPtr++;
        endPtr--;
    }
}

reverseArray(array)
console.log("Reversed Array ", array)
