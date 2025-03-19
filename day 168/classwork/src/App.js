import React from "react";
import { OuterProvider } from "./outside";
import { InnerProvider } from "./inside";
import ChildComponent from "./child";

const App = () => {
  return (
    <OuterProvider>
      <InnerProvider>
        <ChildComponent />
      </InnerProvider>
    </OuterProvider>
  );
};

export default App;
