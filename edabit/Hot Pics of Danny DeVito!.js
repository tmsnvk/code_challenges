// https://edabit.com/challenge/QKw2Hq7JGggCQsGwQ

function preventDistractions(str) {
	const r = /anime|meme|vine|roasts|Danny DeVito/g;
	
	for (x of str) {
		if (str.match(r)) {
			return "NO!";	
		}	
	}
	
	return "Safe watching!";
}
