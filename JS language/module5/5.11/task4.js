const date = new Date(2015, 0, 2);

const getDateAgo = (date, days) => {
  const tmp = new Date(date);
  tmp.setDate(date.getDate() - days);
  return tmp.getDate();
};

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
