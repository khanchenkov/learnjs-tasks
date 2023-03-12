const readNumber = () => {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") {
    return null;
  }

  return Number(num);
};

console.log(`Вы ввели: ${readNumber()}`);
