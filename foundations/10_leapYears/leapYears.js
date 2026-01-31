const leapYears = function (year) {
  let isLeapYear = false;

  let isDivisible4 = false;
  let isDivisible100 = false;
  let isDivisible400 = false;

  if (year % 4 === 0) isDivisible4 = true;
  if (year % 100 === 0) isDivisible100 = true;
  if (year % 400 === 0) isDivisible400 = true;

  if (isDivisible4 && !isDivisible100) {
    isLeapYear = true;
    return isLeapYear;
  }

  if (isDivisible400) {
    isLeapYear = true;
    return isLeapYear;
  }

  return isLeapYear;
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
