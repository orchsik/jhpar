/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSample } from "../contexts/sample";

const Receives = (props) => {
  const { value } = props;

  return <div>현재 설정된 값: {value}</div>;
};

export default useSample(Receives);
