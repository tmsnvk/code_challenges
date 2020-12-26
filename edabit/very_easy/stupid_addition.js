// https://edabit.com/challenge/GABaDpxGZGFBdQPjs

const stupidAddition = (a, b) => {
	if (typeof a === "string" && typeof b === "string") {
		return parseInt(a) + parseInt(b);
	} else if (typeof a === "number" && typeof b === "number") {
		return a.toString() + b.toString();
	} else {
		return null;
	}
}
