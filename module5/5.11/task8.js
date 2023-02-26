const formatDate = (date) => {
  const diff = new Date() - date;
  if (diff < 1000) {
    return "прямо сейчас";
  }

  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) {
    return seconds + " сек. назад";
  }

  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) {
    return minutes + " мин. назад";
  }

  const d = [
    "0" + date.getDate(),
    "0" + (date.getMonth() + 1),
    "" + date.getFullYear(),
    "0" + date.getHours(),
    "0" + date.getMinutes(),
  ].map((item) => item.slice(-2));

  return `${d.slice(0, 3).join(".")} ${d.slice(3).join(":")}`;
};

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00
