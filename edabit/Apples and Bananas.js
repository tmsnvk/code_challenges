// https://edabit.com/challenge/bhanrxz6EKfWR7ApR

String.prototype.vreplace= function(vowel) {
  return this.replace(/[aeiou]/g, vowel);
}