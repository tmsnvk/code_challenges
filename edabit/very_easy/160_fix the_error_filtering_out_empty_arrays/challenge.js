// https://edabit.com/challenge/4weFPnpgS2S5aw4aN

// Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. 
// In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] 
// to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }

// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Fix this incorrect code so that all tests pass!
function removeEmptyArrays(arr) {
	return arr.filter(x => x.length !== 0)
}
