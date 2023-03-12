function Obj(num) {
  this.num = num;
}

let obj1 = new Obj(10);
let obj2 = new obj1.constructor(6);

console.log(obj2.num);
