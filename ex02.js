'use strict'
// you have array of groups.
// you need to display them in two panels: confirmed and unconfirmed.
// in each panel groups will be displayed in rows by two.
// Prepare your data in such a way, that you will have two arrays - one for confirmed, one for unconfirmed - and in each array you will have group ids grouped in arrays of two elements.

// don't use loops, use as many lodash functions as you can.

var _ = require('lodash');

var groups = [
  { 'id': 1, 'name': 'Green', 'confirmed': false },
  { 'id': 2, 'name': 'Yellow', 'confirmed': true },
  { 'id': 3, 'name': 'Blue', 'confirmed': false },
  { 'id': 4, 'name': 'Red', 'confirmed': false },
  { 'id': 5, 'name': 'Navy', 'confirmed': true },
  { 'id': 6, 'name': 'Pink', 'confirmed': true },
  { 'id': 7, 'name': 'Magenta', 'confirmed': true },
  { 'id': 8, 'name': 'Octarine', 'confirmed': true }
];

var group = function(groups){
  var confirmed_array = _
    .chain(groups)
    .pickBy(function(group){
      return group.confirmed == true;
    })
    .transform(function(result, n){
      result.push(n.id);
    }, [])
    .chunk(2)
    .value();

  var unconfirmed_array = _
    .chain(groups)
    .pickBy(function(group){
      return group.confirmed == false;
    })
    .transform(function(result, n){
      result.push(n.id);
    }, [])
    .chunk(2)
    .value();

  return [confirmed_array, unconfirmed_array];
}

console.log( group(groups) );
// [ [ [ 2, 5 ], [ 6, 7 ], [ 8 ] ], [ [ 1, 3 ], [ 4 ] ] ]
