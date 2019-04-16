Function.prototype.inherits = function (That) {
  function Surrogate() {}
  Surrogate.prototype = That.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function (That) {
  this.prototype = Object.create(That.prototype);
  this.prototype.constructor = this;
};
