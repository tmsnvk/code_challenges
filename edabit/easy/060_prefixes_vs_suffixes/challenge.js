// https://edabit.com/challenge/pBp7v6zkQvNa9jByh

// Prefixes vs. Suffixes
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.
// The prefix and suffix arguments have dashes - in them.

const isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1));

const isSuffix = (word, suffix) => word.endsWith(suffix.slice(1));
