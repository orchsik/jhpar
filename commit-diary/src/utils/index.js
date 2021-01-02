export const getDaysArray = (year, month) => {
  const monthIndex = month - 1;
  // const names = Object.freeze(["일", "월", "화", "수", "목", "금", "토"]);
  const date = new Date(year, monthIndex, 1);
  const result = [];
  while (date.getMonth() === monthIndex) {
    // result.push(`${month}/${date.getDate()}(${names[date.getDay()]})`);
    result.push(`${month}/${date.getDate()}`);
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export const getMustCommitCnt = (year, month) => {
  const monthIndex = month - 1;
  const names = Object.freeze(["일", "월", "화", "수", "목", "금", "토"]);
  const date = new Date(year, monthIndex, 1);
  let mustCommitCnt = 0;
  while (date.getMonth() === monthIndex) {
    if (names[date.getDay()] !== "토" && names[date.getDay()] !== "일") {
      mustCommitCnt++;
    }
    date.setDate(date.getDate() + 1);
  }
  return mustCommitCnt;
};

export const comma = (value) => {
  //Number.isInteger(value)
  return typeof value === "number"
    ? value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
    : value;
};

export const SELECT_ITEMS = [
  { label: "패스", value: 0, calValue: 0 },
  { label: "커밋", value: 1, calValue: 1 },
  { label: "야근", value: 2, calValue: 1 },
];
