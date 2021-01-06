// https://edabit.com/challenge/vGg5Q5WGHw5fNgwr7

function digitalClock(seconds) {
	return new Date(seconds * 1000).toISOString().substr(11, 8);
}