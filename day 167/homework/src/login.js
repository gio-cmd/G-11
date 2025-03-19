import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
