//TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(numbers) {
    let max = null
    numbers.forEach(i => {
        if (i % 2 == 0) {
            if (max == null || i > max) {
                max = i;
            }
        }
    });
    return max;
}
// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);