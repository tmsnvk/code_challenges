// https://edabit.com/challenge/NJQ64N6xhrppEMkjY

const rotateMaxNumber = (num) => {
	let a = [];
  const b = num.toString().split("");
	
	for (let i = 0; i < b.length; i++) {
		a.push(Number(b[i]));
	}
	
	return parseInt(a.sort().reverse().join(""));
}