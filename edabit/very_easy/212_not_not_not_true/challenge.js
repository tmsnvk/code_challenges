// https://edabit.com/challenge/ootmkgXwJPvnub862

// Not Not Not True
// Something which is not true is false, but something which is not not true is true! 
// Create a function where given n number of "not", evaluate whether it's true or false.

const notNotNot = (n, bool) => {
	if(bool){
		return n % 2 === 0 ? true : false;
	}
	if(!bool){
		return n % 2 === 0 ? false : true;
	}
}
