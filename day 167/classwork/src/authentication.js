import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [account, setAccount] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setAccount(1);
        }
    }, []);

    const register = (newUser) => {
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        setAccount(1);
    };

    const login = (credentials) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
            setUser(storedUser);
            setAccount(1);
        } else {
            alert("invalid info")
        }
  };

    const logout = () => {
        setUser(null);
        setAccount(0);
    };

    return (
        <AuthContext.Provider value={{ account, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;