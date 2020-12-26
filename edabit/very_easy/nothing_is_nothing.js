// https://edabit.com/challenge/ujAWXXe8Q7J6xjcTo

function nothingIsNothing() {
	let check = x => Boolean(x) === true;
  return [...arguments].every(check);
}