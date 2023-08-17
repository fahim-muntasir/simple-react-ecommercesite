/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        loginUser,
        signInWithGoogle
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
