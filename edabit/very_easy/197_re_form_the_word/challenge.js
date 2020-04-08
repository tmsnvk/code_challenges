// https://edabit.com/challenge/KQQ7RMXjSK257GQgy

// Re-Form the Word
// A word has been split into a left part and a right part. 
// Re-form the word by adding both halves together, changing the first character to an uppercase letter.

const getWord = (left, right) => `${left[0].toUpperCase()}${left.slice(1)}${right}`;
