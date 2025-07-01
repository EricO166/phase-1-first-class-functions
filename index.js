
function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  function namedFn() {
    console.log("I'm a named function!");
  }
  return namedFn;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}
