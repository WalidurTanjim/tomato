import React, { createContext, useState } from 'react';

export const AuthContext = createContext([null]);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("All")

    const userInfo = {
        user, loading,
        category, setCategory
    }

    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;