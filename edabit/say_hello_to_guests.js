// https://edabit.com/challenge/r9uigYABnbPLY7zsz

function greetPeople(names) {
	const y = [];
	
	for (x of names) {
		y.push(`Hello ${x}`);
	}
return y.join(", ");
}
