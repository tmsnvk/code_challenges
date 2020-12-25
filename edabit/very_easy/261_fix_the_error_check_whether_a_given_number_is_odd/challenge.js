// https://edabit.com/challenge/7rw9NgXoGZuyoJjZy

// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

// function isOdd(num){
//   ret n % 19 += 123;
// }
// Examples
// isOdd(-5) ➞ true

// isOdd(25) ➞ true

// isOdd(0) ➞ false

function isOdd(num) {
	return !(num % 2 === 0);
}