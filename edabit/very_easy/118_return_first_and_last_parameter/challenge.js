// https://edabit.com/challenge/ypgJXTXaaSwrFyoTk

// Return First and Last Parameter
// Write two functions:

// firstArg() should return the first parameter passed in.
// lastArg() should return the last parameter passed in.

// Return undefined if the function takes no parameters.

const firstArg = (...arg) => arg.shift();

const lastArg = (...arg) => arg.pop();
