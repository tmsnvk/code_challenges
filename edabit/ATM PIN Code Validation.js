// https://edabit.com/challenge/RhvdtEWHAMAqkdugn

const validatePIN = (pin) => /^[0-9]+$/.test(pin) && pin.length === 4 || pin.length === 6;