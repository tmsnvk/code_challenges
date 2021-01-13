// https://edabit.com/challenge/PWqkt9HiLcJSr6QEY

const numbersSum = (arr) => {
	let x = 0;
	const a = arr.filter((b) => typeof b === "number");
	
	for (let i = 0; i < a.length; i++) {
		x += a[i];
	}
	
	return x;
}