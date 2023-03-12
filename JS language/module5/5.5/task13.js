let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) => {
  const newArr = {};

  arr.forEach((item) => {
    newArr[item.id] = item;
  });

  return newArr;
};

let usersById = groupById(users);
console.log(usersById);
