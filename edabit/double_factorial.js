// https://edabit.com/challenge/ZYE9zs95bJrBWpDxg

function doubleFactorial(num) {
	if (num === -1 || num === 0) return 1;
	
	return num * doubleFactorial(num - 2); 
}