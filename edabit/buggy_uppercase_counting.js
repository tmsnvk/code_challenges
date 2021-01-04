// https://edabit.com/challenge/HFBYPP8gSRn2n9qrQ

function countUppercase(str) {
	let sum = 0;
	
	const a = str.join("");
	
	for (let i = 0; i < a.length; i++) {
		if (a[i] === a[i].toUpperCase()) {
			sum++;
		}
	}
	return sum;
}