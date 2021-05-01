import React, { createContext, useContext } from "react";

const ctx = createContext(null);
const { Provider } = ctx;

export const createPage = useHook => Wrap => props => {
  let value = useHook(props.initialState);
  return (
    <Provider value={value}>
      <Wrap {...{ ...props, ...value }}>{props.children}</Wrap>
    </Provider>
  );
};
// tainan l 

export const inject = fn => {
  return ComponentUi => {
    return props => {
      const value = useContext(ctx);
      const newVal = typeof fn == "function" ? fn(value) : value;
      return <ComponentUi {...{ ...newVal, ...props }} />;
    };
  };
};
