function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // что выведет? почему?
// undefined
// У нового объекта нет test
