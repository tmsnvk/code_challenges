// https://edabit.com/challenge/W6RRCaj8mZJgiRAgy

function anotherFunc() {
	let str = "bye";

	setTimeout(() => {
		callback(str)
	}, 100)
	
}

var doc = "hello";

function callback(str) {
	doc = str;
}