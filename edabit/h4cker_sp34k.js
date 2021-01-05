// https://edabit.com/challenge/cada8J3AWGRhwQhkk

const hackerSpeak = (str) => {
	const a = { e: "3", i: "1", o: "0", a: "4", s: "5" };
	
	return str.replace(/e|i|o|a|s/g, (b) => a[b]);
}