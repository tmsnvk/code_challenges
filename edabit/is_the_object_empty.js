// https://edabit.com/challenge/nGybgqB9agSqvBszF

const isEmpty = obj => {
	for(const key in obj) {
		if(obj.hasOwnProperty(key))
			return false;
    }
	
  return true;
}
