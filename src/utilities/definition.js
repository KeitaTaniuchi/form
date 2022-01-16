import dayjs from "dayjs";
dayjs.locale("ja");
const isLeapYear = require("dayjs/plugin/isLeapYear");
dayjs.extend(isLeapYear);

const createYears = () => {
  const yearsArr = [];
  yearsArr.push({
    value: null,
    text: "-年を選択してください-",
    disabled: true,
  });
  for (let i = dayjs().year(); i >= dayjs().year() - 100; i--) {
    if (i > 2018) {
      yearsArr.push({ value: i, text: `${i}年 (令和${i - 2018}年)` });
    } else if (i > 1988) {
      yearsArr.push({ value: i, text: `${i}年 (平成${i - 1988}年)` });
    } else if (i > 1925) {
      yearsArr.push({ value: i, text: `${i}年 (昭和${i - 1925}年)` });
    } else if (i > 1911) {
      yearsArr.push({ value: i, text: `${i}年 (大正${i - 1911}年)` });
    }
  }
  return yearsArr;
};

const createMonths = () => {
  const monthsArr = [];
  monthsArr.push({
    value: null,
    text: "-月を選択してください-",
    disabled: true,
  });
  for (let i = 1; i <= 12; i++) {
    monthsArr.push({ value: i, text: `${i}月` });
  }
  return monthsArr;
};

const createDates = (thisYear, thisMonth) => {
  const datesArr = [];
  const shortMonths = [2, 4, 6, 9, 11];
  datesArr.push({
    value: null,
    text: "-日を選択してください-",
    disabled: true,
  });

  /* 閏年かつ2月を選択 */
  if (dayjs(String(thisYear)).isLeapYear() && thisMonth === 2)
    for (let i = 1; i <= 29; i++) {
      datesArr.push({ value: i, text: `${i}日` });
    }

  /* 小の月を選択 */ 
  else if (shortMonths.includes(thisMonth))
    for (let i = 1; i <= 30; i++) {
      datesArr.push({ value: i, text: `${i}日` });
    }
    
  /* 大の月を選択または初期値 */ 
  else
    for (let i = 1; i <= 31; i++) {
      datesArr.push({ value: i, text: `${i}日` });
    }
  return datesArr;
};

export default { createYears, createMonths, createDates };
