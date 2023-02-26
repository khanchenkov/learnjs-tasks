function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let add = Number(prompt("add", 0));
    this.value += add;
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
