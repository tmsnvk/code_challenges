// https://edabit.com/challenge/hPWnaSckJke5FXNEH

const timeForMilkAndCookies = date => {
	const x = date.getMonth();
	const y = date.getDate();
	
	return x == 11 && y == 24 ? true : false;
}
