// const convertToCelsius = function(F) {
//   let temp = (((F - 32) * 5/9)*100)/100;
//   console.log(temp);
//   let format = math.round(temp);
//   console.log(format);
//   return format;
//   // console.log(format);
//   // if(format.endsWith('.0')){
//   //   parseInt(temp);
//   // }
//   // else {
//   //   parseFloat(temp);
//   // }
//   // return temp;
// };

// const convertToFahrenheit = function(C) {
//   let temp = (((C * 9 / 5) + 32)*100)/100;;
//   console.log(temp);
//   let format = math.round(temp);
//   console.log(format);
//   return format;
//   // console.log(format);
//   // if(format.endsWith('.0')){
//   //   parseInt(temp);
//   // }
//   // else {
//   //   parseFloat(temp);
//   // }
//   // return temp;
// };

const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
