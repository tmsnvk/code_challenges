// https://edabit.com/challenge/huiJkoQzegoc5qeCJ

const censor = (str) => {
	const arr = str.split(" ");
	
	const res = arr.map(x => x.length < 5 ?  x : "*".repeat(x.length));

	return res.join(" ");
}
