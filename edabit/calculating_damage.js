// https://edabit.com/challenge/g7FhPFYdZACYeJTSk

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