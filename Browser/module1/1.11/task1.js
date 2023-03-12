let coords = elem.getBoundingClientRect();

let angle1 = [coords.left, coords.top];
let angle2 = [coords.right, coords.bottom];
let angle3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
let angle4 = [
  coords.right - parseInt(getComputedStyle(field).borderRightWidth),
  coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth),
];
