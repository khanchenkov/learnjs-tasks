function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    shooters.push(() => console.log(i));
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

// Почему у всех стрелков одинаковые номера?
// Function declared in a loop contains unsafe references to variable(s) 'i'
// при while не создается новое лексическое окружение с нужной i
