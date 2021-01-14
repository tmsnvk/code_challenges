// https://edabit.com/challenge/pzv7pwMeXnF5aZMfQ

function calculateSum(txt) {
	const a = txt.split("").map((x) => x.charCodeAt(0)).reduce((current, previous) => previous + current);
	
	return a;
}

function reverseString(txt) {
	const b = txt.split("").reduce((y, x) => x + y, "");
	
	return b;
}