// https://edabit.com/challenge/9qrjtshZq8L5ATcKt

function joinDigits(n) {
	let a = [];
  
	for (let i = 1; i <= n; i++) {
	  a.push(String(i).split("").join("-"));
	}

  return a.join("-");
}