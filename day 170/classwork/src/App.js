import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import BrokenComponent from "./components/BrokenComponent";

const App = () => {
  return (
    <div>
      <h1>Error Boundary</h1>
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>

    </div>
  );
};

export default App;