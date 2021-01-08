// https://edabit.com/challenge/RiyXDZNZAD4fj9xfJ

const clone = (arr) => {
	arr.push([...arr]);
	return arr;
} 