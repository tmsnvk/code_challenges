// https://edabit.com/challenge/ootmkgXwJPvnub862

const notNotNot = (n, bool) => {
	if(bool){
		return n % 2 === 0 ? true : false;
	}
	if(!bool){
		return n % 2 === 0 ? false : true;
	}
}
