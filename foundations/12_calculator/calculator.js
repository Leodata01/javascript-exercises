const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, item) => {
    return sum + item;
  }, 0);
};

const multiply = function (arr = []) {
  return arr.reduce((multiply, item) => {
    return multiply * item;
  }, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let value = 1;
  for (let i = n; i > 1; i--) {
    value = value * i;
  }
  return value;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
