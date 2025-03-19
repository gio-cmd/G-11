import React from "react";

const BrokenComponent = () => {
  throw new Error("This is a forced error!");
  return <div>This will never render.</div>;
};

export default BrokenComponent;
