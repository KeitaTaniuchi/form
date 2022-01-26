"use strict";

import dayjs from "dayjs";
dayjs.locale("ja");

const createYears = () => {
  const yearsArr = [
    {
      value: null,
      text: "-年を選択してください-",
      disabled: true,
    },
  ];
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
  const monthsArr = [
    {
      value: null,
      text: "-月を選択してください-",
      disabled: true,
    },
  ];
  for (let i = 1; i <= 12; i++) {
    monthsArr.push({ value: i, text: `${i}月` });
  }
  return monthsArr;
};

const createDates = (year, month) => {
  const datesArr = [
    {
      value: null,
      text: "-日を選択してください-",
      disabled: true,
    },
  ];

  /* 初期値 */
  if (year === null || month === null)
    for (let i = 1; i <= 31; i++) {
      datesArr.push({ value: i, text: `${i}日` });
    }
  /* 年と月選択後 */ else
    for (let i = 1; i <= dayjs(`'${year}-${month}-01'`).daysInMonth(); i++) {
      datesArr.push({ value: i, text: `${i}日` });
    }
  return datesArr;
};

export default { createYears, createMonths, createDates };
