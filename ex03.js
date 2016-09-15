// Given array of users and helper functions sort, map, nicePrint - put your code in 'younges' function implementation so it will work as expected.

// Tip. - flow is doing same thing as compose in functional programming

var _ = require('lodash');

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

/* --- helpers --- */

var sort = _.curry(function(key, collection){
  return _.sortBy(collection, key);
});

var map = _.curry(function(fn, collection){
  return _.map(collection, fn);
});

var nicePrint = function(chr){
  return chr.user + ' is ' + chr.age;
};

/* --- */

/*
 * I've skipped map function and picked the first
 * element of users SORTED array using _.head() to get the youngest person.
*/

var youngest = _.flow([ sort('age'), _.head, nicePrint ]);

console.log( youngest(users) ); 
// pebbles is 1
