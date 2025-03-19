import React, { createContext } from "react";

export const OuterContext = createContext();

export const OuterProvider = ({ children }) => {
  return (
    <OuterContext.Provider value="Outer Context Value">
      {children}
    </OuterContext.Provider>
  );
};
