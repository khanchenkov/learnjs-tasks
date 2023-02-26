let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const isReadMap = new WeakMap();

isReadMap.set(messages[0], new Date());
isReadMap.set(messages[1], new Date());
isReadMap.set(messages[2], new Date());

isReadMap.set(messages[0], new Date());

console.log(isReadMap);

console.log(
  `Message ${messages[0].text} read: ${isReadMap.has(
    messages[0]
  )} at ${isReadMap.get(messages[0])} `
);
console.log(
  `Message ${messages[0].text} read: ${isReadMap.has(
    messages[1]
  )} at ${isReadMap.get(messages[0])} `
);

messages = messages.filter((item, id) => !isReadMap.has(item));

console.log(messages);
