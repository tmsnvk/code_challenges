// https://edabit.com/challenge/LvtsCQNpx7CwHGubf

function makeTitle(str) {
	const a = str.split(" ");
	const b = a.map((bb) => `${bb.substr(0, 1).toUpperCase()}${bb.substr(1)}`);

	return b.join(" ");
}