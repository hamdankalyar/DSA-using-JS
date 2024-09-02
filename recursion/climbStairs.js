/*
Question:
You are climbing a staircase. It takes `n` steps to reach the top.
Each time you can either climb 1 step or 2 steps. In how many distinct ways can you climb to the top?

You can only climb one step or two steps at a time.
*/

// Function to calculate the number of distinct ways to climb `n` stairs
function climbStairs(n) {
    // Base case: If there are no steps left (n == 0), there is exactly one way to climb (doing nothing)
    if (n == 0) {
        return 1;
    }

    // Base case: If the number of steps is negative, it's an invalid case, so return 0
    if (n < 0) {
        return 0;
    }

    // Recursive case: To find the number of ways to climb `n` stairs,
    // you can either come from `n-1` stairs or from `n-2` stairs
    // Therefore, the total number of ways is the sum of ways to climb `n-1` stairs and `n-2` stairs
    return climbStairs(n - 1) + climbStairs(n - 2);
}

// Test case
console.log(climbStairs(2)); // Expected output: 2
