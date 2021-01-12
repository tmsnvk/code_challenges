// https://edabit.com/challenge/6q9iTtQdnZZM5Cbai

function checkTitle(title) {
	let a = [];
	title.split(" ").map((x) => /[A-Z]/.test(x[0]) ? a.push(true) : a.push(false));
	
	if (!a.includes(false)) {
		return true;
	} else {
		return false;
	}
}