const getLocalDay = (date) => day === 0 ? 7 : date.getDay();

let date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getLocalDay(date)); // вторник, нужно показать 2
