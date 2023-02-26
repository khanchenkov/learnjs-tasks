const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

console.log(getLastDayOfMonth(2020, 1));
console.log(getLastDayOfMonth(2021, 1));
console.log(getLastDayOfMonth(2022, 0));
console.log(getLastDayOfMonth(2022, 10));
