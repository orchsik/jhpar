import React, { Component, createContext } from "react";

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;

// Provider에서 state를 사용하기 위해서 컴포넌트를 새로 만들어준다.
class SampleProvider extends Component {
  state = {
    value: "기본값입니다.",
  };

  // 여기서 actions 라는 객체는 임의로 설정한 객체.
  // 변화를 일으키는 함수를 전달할 때, 함수 하나하나 일일이 전달하는 것이 아니라,
  // 객체 하나로 한꺼번에 전달하기 위함이다.
  actions = {
    setValue: (value) => {
      this.setState({ value });
    },
  };

  render() {
    const { state, actions } = this;

    // Provider 내에서 사용할 값은 "value" 라고 부른다.
    // 현재 컴포넌트의 state 와 actions 객체를 넣은 객체를 만들어서
    // Provider 의 value 값을 사용한다.
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <SampleConsumer>
        {(value) => {
          const { state, actions } = value;
          return (
            <WrappedComponent value={state.value} setValue={actions.setValue} />
          );
        }}
      </SampleConsumer>
    );
  };
}

export { Context as SampleContext, SampleProvider, SampleConsumer, useSample };
