import React from "react";
import S from "styled-components";

import { backgroundColor, textColor } from "../../../styles/colors";
import { comma } from "../../../utils";

const TableEnd = S.div({
  display: "flex",
  flex: 1,
  height: "100%",
  backgroundColor: backgroundColor,
  alignItems: "center",
  justifyContent: "center",
});

const EndSection = (props) => {
  const { userInfoList, mustCommitCnt } = props;

  return (
    <>
      <TableEnd style={{ flex: 0.5 }}>
        <p style={{ fontSize: "2.5vh", fontFamily: "N1", color: textColor }}>
          기부
        </p>
      </TableEnd>

      {userInfoList.map((d) => {
        const { sumValue } = d;
        const donation = comma((mustCommitCnt - sumValue) * 3000);
        return (
          <TableEnd>
            <p
              style={{ fontSize: "2.5vh", fontFamily: "N1", color: textColor }}
            >
              {donation}
            </p>
          </TableEnd>
        );
      })}
    </>
  );
};

export default EndSection;
