// https://edabit.com/challenge/cHNEFGeQrH3nonwJw

const clearFog = str => {
	const x = /[fog]/g;
	
	if (str.match(/([fog])/g) === null) {
    return "It's a clear day!";
	}
	
	return str.replace(x, "");
}
