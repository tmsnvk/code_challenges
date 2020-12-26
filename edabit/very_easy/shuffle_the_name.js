// https://edabit.com/challenge/eitMRpuJR3Ls4zQsn

const nameShuffle = str => {
	const x = str.split(" ");
	const y = x.reverse().join(" ");
	
	return y;
}
