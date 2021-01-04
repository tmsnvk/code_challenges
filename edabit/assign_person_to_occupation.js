// https://edabit.com/challenge/WBfDcicRuqrRkFS2D

function assignPersonToJob(names, jobs) {
	let a = {};
	
	names.forEach((name, index) => a[name] = jobs[index]);
	
	return a;
}