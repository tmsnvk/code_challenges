// https://edabit.com/challenge/i6YqzHcSiPiEQKjeX

const maximumScore = tileHand => {
	let total = 0;
	
	for (let x of tileHand) {
		total += x.score;	
	}
	
	return total;
}
