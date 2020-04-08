// https://edabit.com/challenge/KESyfS3A5vB2jkxFR

// Typing Game
// You're in the midst of creating a typing game.
// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and 
// outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

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
