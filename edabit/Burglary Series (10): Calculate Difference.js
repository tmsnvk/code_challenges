// https://edabit.com/challenge/8s2jy9hR2TAeQinKD

const calculateDifference = (obj, limit) => {
	let a = 0;
	
	for (let el in obj) {
    a += parseFloat(obj[el]);
  }
	
	return Math.abs(limit - a);
}