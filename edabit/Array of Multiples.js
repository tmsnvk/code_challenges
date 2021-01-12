// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

const arrayOfMultiples = (num, length) => {
	let a = [];
	
	for (let i = 1; i <= length; i++) {
		a.push(num * i);
	}
	
	return a;
}