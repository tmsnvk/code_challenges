// https://edabit.com/challenge/CtxRSuGhry3XK7wjh

function shiftToRight(x, y) {
	if (y > 0) {
  	return shiftToRight(Math.floor(x / 2), y - 1);
  } else {
  	return x;
  }
}