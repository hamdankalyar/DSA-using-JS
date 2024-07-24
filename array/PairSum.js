function findPairSum(arr, sum) {
    let sumPairs = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 5) {
                console.log("Pair Found ", arr[i], "+", arr[j])
                sumPairs.push([arr[i], arr[j]])
            }

        }
    }
    return sumPairs;
}

let sumPairs = findPairSum([1, 2, 3, 4], 5)
console.log("Sum Pairs", sumPairs)