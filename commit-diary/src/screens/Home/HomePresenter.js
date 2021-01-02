import React from "react";
import S from "styled-components";

import TopSection from "./sections/TopSection";
import TableBodySelectList from "./sections/TableBodySelectList";
import EndSection from "./sections/EndSection";
import TableBodyItem from "./components/TableBodyItem";

import { lightColor, textColor } from "../../styles/colors";

const TableBody = S.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "100%",
  backgroundColor: lightColor,
  justifyContent: "center",
  alignItems: "center",
});

const HomePresenter = (props) => {
  const { dateList, mustCommitCnt, userInfoList, memberInfoList } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "1vh 1vw 3vh",
      }}
    >
      {/* BBB - 우측상단에 버튼으로 다른 달의 이력도 볼 수 있게 하자 */}
      <div style={{ flex: 1, width: "100%" }}>
        <p
          style={{
            fontSize: "3.5vh",
            fontFamily: "N1",
            color: textColor,
            textAlign: "center",
          }}
        >
          일일 커밋 기록
        </p>
      </div>

      <div style={{ display: "flex", flex: 0.2 }}>
        <TopSection userInfoList={userInfoList} />
      </div>

      <div style={{ display: "flex", flex: 10 }}>
        <TableBody style={{ flex: 0.5 }}>
          {dateList.map((day, i) => {
            return (
              <TableBodyItem>
                <p style={{ margin: 0, padding: 0, color: textColor }}>{day}</p>
              </TableBodyItem>
            );
          })}
        </TableBody>

        {userInfoList.map((info) => {
          const currentUser = memberInfoList.find((d) => d.id === info.id);
          const { commitLog } = currentUser;

          return (
            <TableBody>
              {dateList.map((date) => {
                const currentValue = Object.entries(commitLog).find(
                  ([_date, value]) => {
                    return date === _date;
                  }
                );
                const commitValue = currentValue && currentValue[1];

                return (
                  <TableBodyItem>
                    <TableBodySelectList commitValue={commitValue} />
                  </TableBodyItem>
                );
              })}
            </TableBody>
          );
        })}
      </div>

      <div style={{ display: "flex", flex: 0.2 }}>
        <EndSection userInfoList={userInfoList} mustCommitCnt={mustCommitCnt} />
      </div>
    </div>
  );
};

export default HomePresenter;
