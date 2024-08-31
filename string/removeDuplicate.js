// ! approach 1 
function removeDuplicates(input) {
    const eleFreq = {};

    // Convert input to an array of characters if it's a string
    const arr = typeof input === 'string' ? [...input] : input;

    arr.forEach((item) => {

        if (item !== ' ') {
            if (eleFreq.hasOwnProperty(item)) {
                eleFreq[item] += 1;
            } else {
                eleFreq[item] = 1;
            }
        }
    });

    // return eleFreq;
    // return String(Object.keys(eleFreq))
    return Object.keys(eleFreq).join('')
}

console.log(removeDuplicates('hel lo')); // Should work correctly now


// ! approach 2 best than 1 
function removeDuplicates2(input) {
    const eleFreq = {};

    // Directly iterate over the string without converting it to an array
    for (let i = 0; i < input.length; i++) {
        const item = input[i];

        if (item !== ' ') { // Ignore spaces directly
            eleFreq[item] = (eleFreq[item] || 0) + 1;
        }
    }

    return Object.keys(eleFreq).join('')
}

console.log(removeDuplicates2('hel lo')); // { h: 1, e: 1, l: 2, o: 1 }
