// https://edabit.com/challenge/3XiwjSzuMN4MQN6tJ

const fixImport = (s) => {
	const a = s.split(" ");
	
	return [a[2], a[3], a[0], a[1]].join(" ");
}