const convertToCelsius = function (temparature) {
  if (typeof temparature !== Number) "ERROR";

  const celsius = ((temparature - 32) * 5) / 9;
  console.log(celsius);

  const roundCel = Math.round(celsius * 10) / 10;
  return roundCel;
};

const convertToFahrenheit = function (temparature) {
  if (typeof temparature !== Number) "ERROR";

  const fahrenheit = (temparature * 9) / 5 + 32;
  const roundfahr = Math.round(fahrenheit * 10) / 10;
  return roundfahr;
};

console.log(convertToCelsius(-100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
