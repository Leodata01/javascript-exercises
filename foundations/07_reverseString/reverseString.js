const reverseString = function (value) {
  let reverse = "";
  for (i = value.length; i >= 0; i--) {
    reverse += value.slice(i, i + 1);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
