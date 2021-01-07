// https://edabit.com/challenge/orssXtmaHSBw57HAH

const secret = (text) => {
	const a = text.split(".");
	
	if (a.length == 2) {
		return `<${a[0]} class="${a[1]}"></${a[0]}>`;
	} else if (a.length === 3) {
		return `<${a[0]} class="${a[1]} ${a[2]}"></${a[0]}>`;	
	} else if (a.length === 4) {
		return `<${a[0]} class="${a[1]} ${a[2]} ${a[3]}"></${a[0]}>`;	
	} else {
		return `<${a[0]} class="${a[1]} ${a[2]} ${a[3]} ${a[4]}"></${a[0]}>`;	
	}
}