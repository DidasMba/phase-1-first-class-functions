// receivesAFunction function
function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  // returnsANamedFunction function
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      // Function body
    }
    
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      // Function body
    };
  }
  