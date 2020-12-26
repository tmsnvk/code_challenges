// https://edabit.com/challenge/GMh85YdL7kAutJ5YN

function mirror(arr) { 
	const a = arr.reverse().slice(1);
	
	return arr.reverse().concat(a);
}
