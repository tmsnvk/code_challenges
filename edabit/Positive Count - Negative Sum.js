// https://edabit.com/challenge/xXJLZry3vYd4erPct

function countPosSumNeg(arr) {
	if (arr.length === 0) return [];
	
	let a = [0 , 0];
	
	arr.map((x) => x > 0 ? a[0]++ : a[1] += x);
	
	return a;
}