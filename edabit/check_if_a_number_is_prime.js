// https://edabit.com/challenge/f6n3bkqFCojwB2282

function isPrime(num) {
	if (num <= 1) return false;
  if (num === 2) return true;

  let x = Math.sqrt(num);

  for (var i = 2; i <= x; i++) {
    if (num % i === 0) return false;
	}
	
  return true;
}