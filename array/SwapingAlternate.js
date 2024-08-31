let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 101]
function swapAlternate(array) {
    let swaper;
    for (let i = 0; i < array.length; i = i + 2) {
        
        if (i + 1 < array.length) {
            swaper = array[i]
            array[i] = array[i + 1]
            array[i + 1] = swaper
        }


    }

}

swapAlternate(array);
console.log(array)