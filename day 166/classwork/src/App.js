import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AuthComponent from "./components/AuthComponent";

const App = () => {
  return (
    <div>
      <h1>authication</h1>
      <AuthProvider authData={{ email: "vanishvilig1org2@gmail.com", password: "giorgi123" }}>
        <AuthComponent />
      </AuthProvider>
    </div>
  );
};

export default App;
