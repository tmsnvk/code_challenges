// https://edabit.com/challenge/rLybgi7vcxL2ykt8F

function greetingMaker(salutation) {
	return function closure(name) {
	  return salutation + ", " + name 	
	}
}