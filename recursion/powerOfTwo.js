function power(n) {
    if (n == 0) {
        return 1;
    }
    return 2 * power(n - 1)
}

console.log("Finding power of 2: ", power(3))