// https://edabit.com/challenge/jJS3yokQmu4etN5qs

const hasKey = (obj, key) => {
	const x = Object.keys(obj);
	
	if (x.includes(key)) return true;
	return false;
}
