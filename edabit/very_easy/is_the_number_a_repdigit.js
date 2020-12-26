// https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

const isRepdigit = num => {
	if (num > 0) {
		const x = num.toString().split("");
		return x.every(y => y === x[0])
	} else if( num === 0) {
		return true;
	} else {
		return false;
	}
}
