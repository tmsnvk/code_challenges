// https://edabit.com/challenge/5vsYNXXQ7aXzQMMpQ

// RegEx XVII : Quantifiers - x{n}, x{n,}, x{n,}
// Quantifiers indicate numbers of characters or expressions to match. 
// x{n} - Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x".
// x{n,} - Where "n" is a positive integer, matches at least "n" occurrences of the preceding item "x".
// x{n,m} - Where "n" is 0 or a positive integer, "m" is a positive integer, and m > n, 
// matches at least "n" and at most "m" occurrences of the preceding item "x".

// Create a regexp to find ellipsis: 3 (or more?) dots in a row.

const REGEXP = /\.{3,}/g
