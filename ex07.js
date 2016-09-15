/* jshint node: true */
/*
Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

*/

var inputWords = ["Apple", "Banana", "Banana", "Apple", "Durian", "Durian", "Whatever", "Durian"];

function countWords(inputWords){
  var occurences = {};
  inputWords.sort();

  inputWords.reduce( function(prev, current){
    if(prev != current) {
      occurences[current] = 1;
    } else {
      occurences[current] += 1;
    }

    return current;
  }, {});

  return occurences;
}

console.log(countWords(inputWords));
