// https://edabit.com/challenge/WxiJviEJGK52AFps3

function dnaToRna(dna) {
	const a = { A: "U", T: "A", G: "C", C: "G"};
	
	return [...dna].map((i) => a[i]).join("");
}