// https://edabit.com/challenge/szYmNqApJyQ3ePnKH

const findHighest = (arr) => {
	const a = arr.reduce((x,y) => (x > y) ? x : y);
	
	return a;
}