const getSecondsToTomorrow = () => {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const diff = tomorrow - now;

  return Math.round(diff / 1000);
};

console.log(getSecondsToTomorrow());
