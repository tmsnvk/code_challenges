// https://edabit.com/challenge/bADsAhtb5g6pu5WYM

function mysteryFunc(arr, num) {
  const x = [];
	
	for (y of arr) {
		let z = y % num;
		x.push(z);
	}
	
	return x;
}
