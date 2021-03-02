// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  const a = Math.max(...candles);
  const b = candles.filter((c) => c === a);

  return b.length;
}