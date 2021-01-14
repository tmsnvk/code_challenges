// https://edabit.com/challenge/wJBWjX5kSPMKLFmPX

function shhh(sentence) {
	const a = sentence.toLowerCase();

	return `"${a.replace(a.charAt(0), sentence.charAt(0).toUpperCase())}", whispered Edabit.`;
}