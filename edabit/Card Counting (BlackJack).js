// https://edabit.com/challenge/3kzhTP7nEwcaKP82H

function count(deck) {
	let a = 0;
	
	deck.map((x) => String(x).match(/10|[A-Z]/) ? a-- : String(x).match(/[2-6]/) ? a++ : a += 0);
	
	return a;
}