// https://edabit.com/challenge/FBj5P49wwFzj2Jnfr

const findIt = (obj, name) => Object.keys(obj).includes(name) ? `${name.charAt(0).toUpperCase()}${name.slice(1)} is gone...` : `${name.charAt(0).toUpperCase()}${name.slice(1)} is here!`;