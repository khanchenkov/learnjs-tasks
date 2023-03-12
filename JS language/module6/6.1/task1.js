// три варианта решения:
// С использованием цикла.

const sumTo1 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
const sumTo2 = (n) => {
  return n > 1 ? n + sumTo2(n - 1) : n;
};

// С использованием формулы арифметической прогрессии.

const sumTo3 = (n) => {
  return ((1 + n) / 2) * n;
};

console.log(sumTo1(100));
console.log(sumTo2(100));
console.log(sumTo3(100));

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// самый быстрый вариант - черезе формулу, т.к. занимает меньше памяти

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
// нет, т.к. максимальная глубина рекурсии ограничена движком JavaScript.
// Maximum call stack size exceeded
