// https://edabit.com/challenge/QKw2Hq7JGggCQsGwQ

// Hot Pics of Danny DeVito!
// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by 
// meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me by creating a function that takes in a string and checks to see 
// if it contains the following words or phrases:

// "anime"
// "meme"
// "vine"
// "roasts"
// "Danny DeVito"

// If it does, return "NO!". Otherwise, return "Safe watching!".

function preventDistractions(str) {
	const r = /anime|meme|vine|roasts|Danny DeVito/g;
	
	for (x of str) {
		if (str.match(r)) {
			return "NO!";	
		}	
	}
	
	return "Safe watching!";
}
