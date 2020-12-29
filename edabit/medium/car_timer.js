// https://edabit.com/challenge/QMZrRRhp8f65P3xzm

const carTimer = (n) => {
  let a = Math.floor(n / 60);
  let b = (n % 60);
  let m1 = Math.floor(b / 10);
  let m2 = (b % 10);  
  let h1 = Math.floor(a / 10);
  let h2 = (a % 10);
	
  return h1 + h2 + m1 + m2;
}