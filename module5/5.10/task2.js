let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  // ниндзя код
  return Object.entries(salaries).length > 0
    ? arr.sort((a, b) => b[1] - a[1])[0][0]
    : null;
};

// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;

//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

console.log(topSalary(salaries));
