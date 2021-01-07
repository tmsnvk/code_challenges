// https://edabit.com/challenge/DG9JudATzAbgBxvhQ

function validateBinary(b) {
	if (b.slice(0, 7).split("").filter((x) => x === "1").length % 2 === 0 && b.charAt(b.length - 1) === "0") {
		return true;
	} else if (b.slice(0, 7).split("").filter((x) => x === "1").length % 2 !== 0 && b.charAt(b.length - 1) === "1") {
		return true;
	} else {
		return false;
	}
}