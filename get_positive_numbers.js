/**
 * This program return all positives numbers from an array.
 */

function getPositiveNumbers(numbers){
    console.log(numbers);
    return numbers.filter(
        (n) => n >= 0
    )
}

console.log(getPositiveNumbers([10, -5, 2, -4]));