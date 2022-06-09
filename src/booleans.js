function negate(a) {
  // return !a;
  if (a === true){ return a === false};
  if (a===false){return true};
  // else if (a === false) { return true};
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {  
  return a !== b;
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 !== 0;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  return char === string.charAt(0);
};

function containsVowels(string) {
  return Boolean(string.match(/([aeiou])/ig));
};

function isLowerCase(string) {
  return Boolean(!(string.match(/[A-Z]/g)));
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
