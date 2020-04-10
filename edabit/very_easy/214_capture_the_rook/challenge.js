// https://edabit.com/challenge/H7cs3TS87sFX72mjF

// Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.
// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter) or column (number).

const canCapture = ([yourRook, opponentsRook]) => ((yourRook[0] === opponentsRook[0]) || (yourRook[1] == opponentsRook[1])) ? true : false;
