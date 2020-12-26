// https://edabit.com/challenge/bCMai3bYsRpikCyrh

function amazingEdabit(str) {
	if (str.includes("edabit")) return str;
	
	if (!str.includes("edabit")) return str.replace("amazing", "not amazing");
}