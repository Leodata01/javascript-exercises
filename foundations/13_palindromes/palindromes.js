const palindromes = function (string = "") {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

  const cleanedString = string
    .toLocaleLowerCase()
    .split("")
    .filter((item) => alphanumerical.includes(item))
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};
console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
