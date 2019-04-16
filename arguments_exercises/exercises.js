const sum1 = function() {
  const args = Array.from(arguments);
  console.log(args);
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const sum2 = function(...args) {
  let sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};



Function.prototype.myBind1 = function(ctx) {
  const bindArgs = Array.from(arguments).slice(1);
  const boundTarget = this;
  return function () {
    boundTarget.apply(ctx, bindArgs.concat(Array.from(arguments)));
    // console.log(arguments);
   };
};



Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};




const curriedSum = function(numArgs) {
  const numbers = [];
  let _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    return _curriedSum;
  };
  return _curriedSum;
};

Function.prototype.curry = function(numArgs) {
  const fn = this;
  const args = [];
  let _curry = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn(...args);
      // return fn.apply(null, args);
    }
    return _curry;
  };
  return _curry;
};
