const checkAge1 = (age) => {
  return age > 18 ? true : confirm("Родители разрешили?");
};

const checkAge2 = (age) => {
  return age > 18 || confirm("Родители разрешили?");
};
