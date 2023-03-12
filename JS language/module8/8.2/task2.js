function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

f.defer(3000)(1, 2); // выведет 3 через 1 секунду.
