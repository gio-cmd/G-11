import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, authData }) => {
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};
