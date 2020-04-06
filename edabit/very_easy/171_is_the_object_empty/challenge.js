// https://edabit.com/challenge/nGybgqB9agSqvBszF

// Is the Object Empty?
// Write a function that returns true if an object is empty, and false otherwise.

const isEmpty = obj => {
	for(const key in obj) {
		if(obj.hasOwnProperty(key))
			return false;
    }
	
  return true;
}
