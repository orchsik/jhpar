import React, { Component, createContext } from "react";
import createUseConsumer from "../lib/createUseConsumer";

const Context = createContext;

const { Provider, Consumer: AnotherConsumer } = Context();

class AnotherProvider extends Component {
  state = {
    number: 1,
  };

  actions = {
    increment: () => {
      this.setState(({ number }) => {
        return {
          number: number + 1,
        };
      });
    },
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// const useAnother = createUseConsumer(AnotherConsumer)();
function useAnother(WrappedComponent) {
  return function UseAnother(props) {
    return (
      <AnotherConsumer>
        {(value) => {
          const { state, actions } = value;
          return (
            <WrappedComponent
              number={state.number}
              increment={actions.increment}
            />
          );
        }}
      </AnotherConsumer>
    );
  };
}

export { AnotherConsumer, AnotherProvider, useAnother };
