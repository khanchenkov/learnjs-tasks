function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = (str) => {
    const [a, operand, b] = str.split(" ");

    if (!this.methods[operand]) {
      return null;
    }

    return this.methods[operand](+a, +b);
  };

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
