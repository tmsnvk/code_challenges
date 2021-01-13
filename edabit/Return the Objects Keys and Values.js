// https://edabit.com/challenge/AP4hnF97anRc2mAZ6

const keysAndValues = (obj) => {
	let a = [[], []];
	
	const b = Object.values(obj).map((value) => a[1].push(value));
	const c = Object.keys(obj).map((key) => a[0].push(key));
	
	return a;
}