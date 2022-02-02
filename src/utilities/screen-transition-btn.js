"use strict";

/* 現在のページを基準とした際の、次のページのパスを返す関数 */
const getNextPagePath = (currentPagePath) => {
  let nextPagePath = "";

  if (currentPagePath === "/") nextPagePath = "/STEP2";
  else if (currentPagePath === "/STEP2") nextPagePath = "/STEP3";
  else if (currentPagePath === "/STEP3") nextPagePath = "/STEP4";
  else nextPagePath = "/";

  return nextPagePath;
};

/* 現在のページを基準とした際の、前ページのパスを返す関数 */
const getPrevPagePath = (currentPagePath) => {
  let prevPagePath = "";

  if (currentPagePath === "/") prevPagePath = "/STEP4";
  else if (currentPagePath === "/STEP2") prevPagePath = "/";
  else if (currentPagePath === "/STEP3") prevPagePath = "/STEP2";
  else prevPagePath = "/STEP3";

  return prevPagePath;
};

export default { getNextPagePath, getPrevPagePath };
