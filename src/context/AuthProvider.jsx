import React, { createContext, useState } from 'react';
import appAuth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext([null]);
const auth = appAuth;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("All")


    // createUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(email, password);
    }

    // userProfileUpdate
    const userProfileUpdate = (user, name, image) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name,
            photoURL: image
        })
    }

    // userEmailUpdate
    const userEmailUpdate = (user, email) => {
        setLoading(true);
        return updateEmail(user, email);
    }

    // verifyEmail
    const verifyEmail = user => {
        setLoading(true);
        return sendEmailVerification(user);
    }

    // userPasswordUpdate
    const userPasswordUpdate = (user, password) => {
        setLoading(true);
        return updatePassword(user, password);
    }

    // loginUser
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
    }

    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut();
    }


    const userInfo = {
        user, loading,
        category, setCategory,
        createUser,
        userProfileUpdate,
        userEmailUpdate,
        verifyEmail,
        userPasswordUpdate,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;