// https://edabit.com/challenge/ezv3TCDcgAYhyL3R2

const joinPath = (portion1, portion2) => {
	portion1 = portion1.replace("/", "");
	portion2 = portion2.replace("/", "");
	
	return portion1 + "/" + portion2;
}
