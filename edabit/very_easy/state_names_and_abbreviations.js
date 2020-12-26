// https://edabit.com/challenge/8fnEAEj5vKNqAXNYA

const filterStateNames = (arr, type) => {
	if (type === "abb") {
		return arr.filter(x => x.length == 2);
	}
	if (type === "full") {
		return arr.filter(x => x.length > 2);
	}
}
