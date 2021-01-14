// https://edabit.com/challenge/y4K6Mi7XfaauvoT3u

function removeEntry(obj, itemName) {
	const a = { ...obj };
  delete a[itemName];
	
  return a;
}