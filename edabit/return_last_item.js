// https://edabit.com/challenge/MT5SbF9Xg5Dku6bqL

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