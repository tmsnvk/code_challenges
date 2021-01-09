// https://edabit.com/challenge/KcMmQE3bhxvfiYquQ

function countOnes(i) {
	let a = 0;
	
	i.toString(2).split("").map((x) => Number(x) === 1 ? a += 1 : null);
	
	return a;
}