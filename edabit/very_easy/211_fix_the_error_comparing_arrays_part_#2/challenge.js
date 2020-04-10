// https://edabit.com/challenge/MWRiXba7bvi792SmQ

// Fix the Error / Comparing Arrays (Part #2)
// Your friend did some more research and he fixed the code into the following:

// function checkEquals(arr1, arr2) {
//   if (arr1.join("") === arr2.join("")) {
//     return true
//    } else {
//     return false
//    }
// }

// It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?

function checkEquals(arr1, arr2) {
	if (arr1.join(" ") === arr2.join(" ")) {
  	return true;
 	} else {
  	return false;
 	}
}
