// https://edabit.com/challenge/KESyfS3A5vB2jkxFR

function correctStream(user, correct) {
	const x = [];
	
	for (let i = 0; i < user.length; i++) {
		if(user[i] === correct[i]) {
			x.push(1)
		} else {
			x.push(-1);
		}
	}
	return x;
}
