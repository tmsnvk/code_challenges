// https://edabit.com/challenge/jJS3yokQmu4etN5qs

// Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

const hasKey = (obj, key) => {
	const x = Object.keys(obj);
	
	if (x.includes(key)) return true;
	return false;
}
