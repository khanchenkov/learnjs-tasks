const sumInput = () => {
  const arr = [];

  while (true) {
    let num = prompt("Введите число", 0);
    if (!isFinite(num) || num === "" || num === null) {
      break;
    }
    arr.push(num);
  }

  return arr.reduce((a, b) => a + b, 0);
};

alert(sumInput());
