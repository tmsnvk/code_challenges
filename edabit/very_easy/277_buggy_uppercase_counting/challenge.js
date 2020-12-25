// https://edabit.com/challenge/HFBYPP8gSRn2n9qrQ

// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples
// countUppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6

// countUppercase(["little", "lower", "down"]) ➞ 0

// counUppercase(["EDAbit", "Educate", "Coding"]) ➞ 5

function countUppercase(str) {
	let sum = 0;
	
	const a = str.join("");
	
	for (let i = 0; i < a.length; i++) {
		if (a[i] === a[i].toUpperCase()) {
			sum++;
		}
	}
	return sum;
}