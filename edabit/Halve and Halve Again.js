// https://edabit.com/challenge/iqZkzkWTHrJCFf6ZQ

function halveCount(a, b) {
	let x = -1;
	
	while(a > b){
		a = a / 2;
		x++;
	}
	
	return x;
}