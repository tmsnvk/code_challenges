// https://edabit.com/challenge/tWEsR6BY3qRFP3L8r

function strMatchBy2char(a, b) {
	let x = 0;
	
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] + a[i + 1] === b[i] + b[i + 1]) {
      x += 1;
    }
  }
	
  return x;
}