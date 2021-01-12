// https://edabit.com/challenge/MNKfYEKghbKjxYbzb

function likeOrDislike(arr) {
	let a = "Nothing";

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === a) {
			a = "Nothing";
		} else {
			a = arr[i];		
		} 
	}
	
	return a;
}