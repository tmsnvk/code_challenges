// https://edabit.com/challenge/8n9RyHThC3dNEPCng

const capToFront = s => {
	let y = Array.from(s);
	let caps = y.filter(x => x === x.toUpperCase());
	let small = y.filter(x => x === x.toLowerCase());
	
	return caps.concat(small).join("");
}
