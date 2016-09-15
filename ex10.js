/*
SPY

Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called.

## Example

    var spy = Spy(console, 'error')
    
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    
    console.log(spy.count) // 3

## Arguments

  * target: an object containing the method `method`
  * method: a string with the name of the method on `target` to spy on.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

*/

var Spy = function(object, method){
  this.count = 0;
  this.original_method = object[method];

  // Fixing `this` context to be able inside overriding function
  // I've tried it with () => {} as well since it treats context
  // differently but I didn't make it work.
  var self = this;

  object[method] = function() {
    self.count += 1;
    self.original_method.apply(undefined, arguments);
  };
};

var spy = new Spy(console, 'error');

console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');

console.log(spy.count);

