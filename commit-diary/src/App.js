import React from "react";
import S from "styled-components";
import "antd/dist/antd.css";

import Home from "./screens/Home";

import { backgroundColor } from "./styles/colors";

const Cotnainer = S.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  backgroundColor: backgroundColor,
  // width: window.innerWidth,
  // height: window.innerHeight,
});

const App = () => (
  <Cotnainer>
    <Home />
  </Cotnainer>
);

export default App;
