function stringPalindrome(str) {
    let start = 0
    let end = str.length - 1
    while (end > start) {
        if (str[start] === ' ') {
            start++
            continue
        }
        if (str[end] === ' ') {
            end--
            continue
        }
        if (str[start] !== str[end]) {
            return false;
        }
        end--
        start++

    }
    return true
}
console.log(stringPalindrome("aabbcaa"))