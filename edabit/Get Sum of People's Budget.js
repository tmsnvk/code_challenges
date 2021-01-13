// https://edabit.com/challenge/tmnCStcrkdWbreKP5

function getBudgets(arr) {
	let a = 0;
	
	arr.map((x) => a += Object.values(x)[2]);
	return a;
}