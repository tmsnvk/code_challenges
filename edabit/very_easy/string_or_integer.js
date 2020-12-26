// https://edabit.com/challenge/NL3ygNoPHcktc4mM6

function intOrString(param) {
	if (typeof param === "string") {
		return "str";
	}
	if (typeof param === "number") {
		return "int";
	}
}
