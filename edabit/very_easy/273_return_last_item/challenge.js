// https://edabit.com/challenge/MT5SbF9Xg5Dku6bqL

// Create a function that returns the last value of the last item in an array or string.

// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

// lastItem([]) ➞ undefined

function lastItem(input) {
	if (input === [] || input === "") {
		return undefined;
	} else if (typeof input === "string") {
		return input.charAt(input.length - 1);
	} else {
		const b = input.pop();
		return b;
	}
}