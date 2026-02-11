const fibonacci = function (n) {
  let first = 0;
  let second = 1;
  let actual;

  for (i = 2; i < n; i++) {
    actual = first + second;
    first = second;
    second = actual;
  }
};
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
