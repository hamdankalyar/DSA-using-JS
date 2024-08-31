

function reverseWordsOfSentence(sen) {
    let word = '';
    let result = '';

    for (let i = sen.length - 1; i >= 0; i--) {
        if (sen[i] !== ' ') {
            word = sen[i] + word
        }
        else {

            if (word) {
                result = result + word + ' ';
                word = '';
            }
        }
    }
    if (word) {
        result = result + word
    }

    return result;
}

console.log(reverseWordsOfSentence("hello hamdan ")); // Output: "olleh nadmah"


// ! Approach 2 with leading and trailing spaces
function reverseWordsOfSentence(sen) {
    let word = '';
    let result = '';
    let leadingSpaces = '';  // To store leading spaces
    let trailingSpaces = ''; // To store trailing spaces

    let i = 0;

    // Handle leading spaces
    while (i < sen.length && sen[i] === ' ') {
        leadingSpaces += ' ';
        i++;
    }

    // Process the sentence from the end
    for (let j = sen.length - 1; j >= i; j--) {
        if (sen[j] !== ' ') {
            word = sen[j] + word;
        } else {
            if (word) {
                result = result + word + ' ';
                word = '';
            } else {
                trailingSpaces += ' '; // Collect trailing spaces
            }
        }
    }

    if (word) {
        result = result + word;
    }

    return leadingSpaces + result.trim() + trailingSpaces; // Combine leading spaces, result, and trailing spaces
}

console.log(reverseWordsOfSentence("  hello hamdan ")); // Output: "  hamdan hello "
