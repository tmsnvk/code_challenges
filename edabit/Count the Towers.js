// https://edabit.com/challenge/LcEFe7PsxTqciY62v

function countTowers(towers) {
	const a = towers[towers.length - 1].join("").replace(/ /g, "");
	
	return a.length / 2;
}