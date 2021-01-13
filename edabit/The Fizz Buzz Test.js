// https://edabit.com/challenge/cKQA9N9Yg7ExeWusQ

function fizzBuzz(number) {
	let a = [];

	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			a.push("FizzBuzz");
		} else if (i % 3 === 0) {
			a.push("Fizz");
		} else if (i % 5 === 0) {
			a.push("Buzz");
		} else {
			a.push(i);
		}
	}

	return a;
}