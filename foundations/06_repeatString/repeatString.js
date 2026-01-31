const repeatString = function (string, num) {
  let repeated = "";
  if (num < 0) {
    repeated = "ERROR";
  }
  for (i = 1; i <= num; i++) {
    repeated += string;
  }
  return repeated;
};

console.log(repeatString("ho", 5));
// Do not edit below this line
module.exports = repeatString;
