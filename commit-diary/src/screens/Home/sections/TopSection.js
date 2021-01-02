import React from "react";
import S from "styled-components";

import { backgroundColor, textColor } from "../../../styles/colors";

const TableHeader = S.div({
  display: "flex",
  flex: 1,
  height: "100%",
  backgroundColor: backgroundColor,
  alignItems: "center",
  justifyContent: "center",
});

const TopSection = (props) => {
  const { userInfoList } = props;
  return (
    <>
      <TableHeader style={{ flex: 0.5 }}>
        <p style={{ fontSize: "2.5vh", fontFamily: "N1", color: textColor }} />
      </TableHeader>

      {userInfoList.map((info) => {
        const { name } = info;
        return (
          <TableHeader>
            <p
              style={{ fontSize: "2.5vh", fontFamily: "N1", color: textColor }}
            >
              {name}
            </p>
          </TableHeader>
        );
      })}
    </>
  );
};

export default TopSection;
