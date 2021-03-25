import React, { useContext } from "react";
import { SampleContext } from "../contexts/sample";

const Receives = () => {
  const sample = useContext(SampleContext);

  return <div>현재 설정된 값: {sample.state.value}</div>;
};

export default Receives;
