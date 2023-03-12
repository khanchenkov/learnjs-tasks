const printNumbersSI = (from, to) => {
  let base = from;

  const timerId = setInterval(() => {
    console.log(base);
    if (base === to) {
      clearInterval(timerId);
    }
    base += 1;
  }, 1000);
};

const printNumbersST = (from, to) => {
  let base = from;

  setTimeout(function again() {
    console.log(base);
    if (base <= to) {
      setTimeout(again, 1000);
    }
    base += 1;
  }, 1000);
};

printNumbersSI(2, 11);
printNumbersST(5, 10);
