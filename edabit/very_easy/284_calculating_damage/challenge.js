// https://edabit.com/challenge/g7FhPFYdZACYeJTSk

// Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.

// Examples
// damage(40, 5, "second") ➞ 200

// damage(100, 1, "minute") ➞ 6000

// damage(2, 100, "hour") ➞ 720000

function damage(damage, speed, time) {
	if (damage < 0 || speed < 0) {
		return "invalid";
	}
	
	let timeInSecond = 0;
	if (time === "second") {
		timeInSecond = 1;
	} else if (time === "minute") {
		timeInSecond = 60;
	} else if (time === "hour") {
		timeInSecond = 3600;
	} else {
		timeInSecond = 0;
	}
	
	return damage * speed * timeInSecond;
}