import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthComponent = () => {
  const authData = useContext(AuthContext);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h3>User Authentication</h3>
        <p><strong>Email:</strong> {authData.email}</p>
        <p><strong>Password:</strong> {authData.password}</p>
    </div>
  );
};

export default AuthComponent;
