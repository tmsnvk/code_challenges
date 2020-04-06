// https://edabit.com/challenge/vCtepsfrE7Nts2a9j

// Hamming Distance
// Hamming distance is the number of characters that differ between two strings.
// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.

// Create a function that computes the hamming distance between two strings.
// Both strings will have the same length.

const hammingDistance = (str1, str2) => {
	let i = 0;
	let count = 0; 
	
  while (i < str1.length) { 
  	if (str1.charAt(i) != str2.charAt(i)) 
    	count++; 
      i++; 
  }
	
  return count; 
}
