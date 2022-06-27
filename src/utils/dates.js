export const getMonth = (month = new Date().getMonth()) => {
  const year = new Date().getFullYear();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  let day = firstDayOfMonth * -1;

  const filledMonth = [];
  for (let i = 0; i < 5; i++) {
    filledMonth.push([]);
    for (let j = 0; j < 7; j++) {
      day++;
      filledMonth[i].push(new Date(year, month, day));
    }
  }
  return filledMonth;
};

export const formatDate = (date) =>
  date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

export const DATE_AND_TIME_DIGITS = 16;
export const DATE_DIGITS = 10;
