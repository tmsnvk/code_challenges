// https://edabit.com/challenge/KPENunE3uhBcmSQ7C

const asciiCapitalize = str => {
	let x = "";

	for (let i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) % 2 == 0) {
			x += str.charAt(i).toUpperCase();
		} else {
			x += str.charAt(i).toLowerCase();
		}
	}

	return x;
}
