// const removeFromArray = function (arr = []) {
//   // loop through every arguments but the first one
//   for (argument = 1; argument < arguments.length; argument++) {
//     // loop through the arr to remove the argument
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === arguments[argument]) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   return arr;
// };

function removeFromArray(list = [], ...otherArgs) {
  return list.filter((value) => !otherArgs.includes(value));
}

console.log(removeFromArray([1, 2, 2, 2, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
