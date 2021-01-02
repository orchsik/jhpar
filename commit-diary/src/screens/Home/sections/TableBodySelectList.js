import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

import TableBodyItem from "../components/TableBodyItem";

import {} from "../../../styles/colors";
import { SELECT_ITEMS } from "../../../utils";

const { Option } = Select;

// BBB 선택하면 리덕스/디비 업데이트 작업
function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const TableBodySelectList = (props) => {
  const { commitValue } = props;
  return (
    <>
      <TableBodyItem>
        <Select
          // suffixIcon={null}
          // labelInValue
          defaultValue={commitValue}
          placeholder=""
          style={{ width: "88%" }}
          onChange={handleChange}
          size={"small"}
        >
          {SELECT_ITEMS.map((item) => (
            <Option key={item.key} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      </TableBodyItem>
    </>
  );
};

export default TableBodySelectList;
