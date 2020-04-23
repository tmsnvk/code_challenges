// https://edabit.com/challenge/KPENunE3uhBcmSQ7C

// Capitalize by ASCII
// Create a function that takes a string as input and capitalizes a letter 
// if its ASCII code is even and returns its lower case version if its ASCII code is odd.

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
