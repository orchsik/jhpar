import React from "react";
import Counter from "./components/Counter";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import { AnotherProvider } from "./contexts/another";
import { SampleProvider } from "./contexts/sample";

const AppProvider = ({ contexts, children }) => {
  return contexts.reduce(
    (prev, context) => React.createElement(context, { children: prev }),
    children
  );
};

const App = () => {
  return (
    <AppProvider contexts={[SampleProvider, AnotherProvider]}>
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
      <Counter />
    </AppProvider>

    // <SampleProvider>
    //   <AnotherProvider>
    //     <div className="panes">
    //       <LeftPane />
    //       <RightPane />
    //     </div>
    //   </AnotherProvider>
    // </SampleProvider>
  );
};

export default App;
