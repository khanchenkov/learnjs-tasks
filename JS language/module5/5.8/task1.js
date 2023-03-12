let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let isReadSet = new WeakSet();

isReadSet.add(messages[0]);
isReadSet.add(messages[1]);

isReadSet.add(messages[1]);
isReadSet.add(messages[0]);

isReadSet.add(messages[1]);

console.log(isReadSet);

console.log(`Message ${messages[0].text} read: ${isReadSet.has(messages[0])}`);
console.log(`Message ${messages[1].text} read: ${isReadSet.has(messages[1])}`);

messages = messages.filter((item, id) => !isReadSet.has(item));

console.log(messages);
