// Convert the following code from a for-loop to Array#map:
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.
var numbers = [1,2,3,4,5,6,7,8,9,10];

function doubleAll(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
console.log(doubleAll(numbers));

var result = numbers.map(
  function(num){ 
    return num * 2; 
  });
console.log(result);
