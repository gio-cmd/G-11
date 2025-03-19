import React, { createContext } from "react";

export const InnerContext = createContext();

export const InnerProvider = ({ children }) => {
  return (
    <InnerContext.Provider value="Inner Context Value">
      {children}
    </InnerContext.Provider>
  );
};
