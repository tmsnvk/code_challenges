// https://edabit.com/challenge/vtDnynHfWCnMaKYym

const factorial = (num) => {
	if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}