// https://edabit.com/challenge/CRzAffaQgfeATa2Yk

// Given a set containing an element, return the sole element.

// Examples
// const first = new Set();
// first.add(1); 
// elementSet(first) ➞ 1

// const second = new Set();
// second.add("apple"); 
// elementSet(second) ➞ "apple"

// const third  = new Set();
// third.add(false); 
// elementSet(third) ➞ false

function elementSet(s) {
	const element = Array.from(s);
	
	return element[0];
}