// https://edabit.com/challenge/4QZqtGxiqJbzkNesj

function zipIt(women, men) {
	if (women.length !== men.length) return "sizes don't match";
	
	let a = [];
	
	for (let i = 0; i < women.length; i++) {
		a.push([women[i], men[i]]);
	}
	
	return a;
}