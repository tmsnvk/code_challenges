// https://edabit.com/challenge/ZrACgdprYx7YTTP7d

function mod(a, b) {
	const q = parseInt(a / b);
  const p = q * b;
  
	return a - p;
}