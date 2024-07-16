import React, { createContext, useEffect, useState } from 'react';
import appAuth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAxiosSecure from '../hooks/useAxiosSecure';

export const AuthContext = createContext([null]);
const auth = appAuth;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("All")
    const googleAuth = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    // createUserWithSocialAccount
    const createUserWithSocialAccount = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuth);
    }

    // createUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // userProfileUpdate
    const userProfileUpdate = (user, name) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name
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
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                // create and get token and store to the localStorage
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                if(res.data?.token){
                    localStorage.setItem('token', res.data.token);
                }
            })
            }else{
                // remove token
                localStorage.removeItem('token');
            }
            setUser(currentUser);
            setLoading(false);
            console.log('Current user: ', currentUser);
        });
        
        return () => {
            return unsubscribe();
        }
    }, []);


    const userInfo = {
        user, loading,
        category, setCategory,
        createUserWithSocialAccount,
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