// https://edabit.com/challenge/grqSjHHQYHBeKK6E3

function twoMethods() {
	let methodOne = /hello/.exec("hello")[0] === "hello"; 
	let methodTwo = /hello/.test("hello");
	return methodOne && methodTwo;
}
