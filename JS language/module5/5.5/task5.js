let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  return arr.slice().sort();
};

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
