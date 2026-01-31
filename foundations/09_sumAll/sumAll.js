const sumAll = function (int1, int2) {
  if (int1 < 0 || int2 < 0) return "ERROR";
  if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";

  let min = int2;
  let max = int1;

  console.log(min);
  // assign min and max
  if (int1 < int2) {
    min = int1;
    max = int2;
  }
  console.log(min);

  // create variable list int
  let list = 0;
  // loop between min and max every number and add the int to the list

  for (i = min; i <= max; i++) {
    list += i;
  }

  return list;
};

console.log(sumAll(2, 3));

// Do not edit below this line
module.exports = sumAll;
