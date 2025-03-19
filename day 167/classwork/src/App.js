import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AdminPanel = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminPanel;

