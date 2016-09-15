// use _.partial function to implement functions:

var _ = require('lodash');

var addFiveAndSixAnd = _.partial(function(num1, num2, num3){
  return num1 + num2 + num3;  
}, 5, 6);

var power = _.partial(function(base, exponent){
  return Math.pow(base, exponent);
}, 2);

var powerTwo = _.partial(function(exponent, base){
  return Math.pow(base, exponent);
}, 2);

var powerThree = _.partial(function(exponent, base){
  return Math.pow(base, exponent);
}, 3);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

//Evaluates Math.power(2,3)
console.log(power(3)); //8

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27
