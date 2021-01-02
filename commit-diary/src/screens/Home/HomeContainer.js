import React from "react";

import HomePresenter from "./HomePresenter";

import { getDaysArray, getMustCommitCnt, SELECT_ITEMS } from "../../utils";

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const dateList = getDaysArray(currentYear, currentMonth);
const mustCommitCnt = getMustCommitCnt(currentYear, currentMonth);

const memberInfoList = [
  { id: 1, name: "용운", commitLog: { "1/1": 1, "1/2": 0, "1/3": 2 } },
  { id: 2, name: "수정", commitLog: {} },
  { id: 3, name: "경호", commitLog: {} },
  { id: 4, name: "미정", commitLog: {} },
  { id: 5, name: "현창", commitLog: {} },
];

const userInfoList = memberInfoList.map((d) => {
  const { id, name, commitLog } = d;
  let sumValue = 0;
  Object.values(commitLog).forEach((commitValue) => {
    const itemInfo = SELECT_ITEMS.find((d) => d.value === commitValue);
    const calValue = itemInfo.calValue;
    sumValue += calValue;
  });
  return { id, name, sumValue };
});

const HomeContainer = () => {
  return (
    <HomePresenter
      mustCommitCnt={mustCommitCnt}
      dateList={dateList}
      userInfoList={userInfoList}
      memberInfoList={memberInfoList}
    />
  );
};

export default HomeContainer;
