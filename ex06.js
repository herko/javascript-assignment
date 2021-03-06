/*
Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    
    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)
    
    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true
    
    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Tip: you can use array#some and Array#every or _.includes
*/
var _ = require('lodash');
var result = false;

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

var checkUsersValid = function(goodUsers) {
  return function(suppliedUsers) {
    return suppliedUsers.every(function(user) {
      return _.some(goodUsers, user);
    }); 
  };
};

var testAllValid = checkUsersValid(goodUsers);

result = testAllValid([
  {id: 2},
  {id: 1},
  {id: 3},
  {id: 9},
  {id: 5},
  {id: 6},
  {id: 7}
]);
console.log(result);

result = testAllValid([
  {id: 2},
  {id: 1},
  {id: 3}
]);
console.log(result);
