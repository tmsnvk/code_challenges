// https://edabit.com/challenge/ezv3TCDcgAYhyL3R2

// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them. 
// The portions will be joined with the "/" separator. 
// There could be only one separator and if it is not present it should be added.

const joinPath = (portion1, portion2) => {
	portion1 = portion1.replace("/", "");
	portion2 = portion2.replace("/", "");
	
	return portion1 + "/" + portion2;
}
