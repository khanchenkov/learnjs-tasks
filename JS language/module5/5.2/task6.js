const randomInteger = (min, max) => {
  let num = Math.random() * (max + 1 - min) + min;
  return Math.floor(num);
};

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
