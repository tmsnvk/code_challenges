// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

const canNest = (arr1, arr2) => Math.min(...arr1) > Math.min(...arr2);
