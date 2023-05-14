import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from './Firebase.config';


export const themeContext = createContext();

const MyProvider = ({children}) => {
  const [loader,setLoader] = useState(true);
  const [myUser,setMyUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const googleSign = () => {
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user) => {
        setLoader(false);
      });
      return () => {
        unsubscribe();
      }
    },[])


    const userInfo = {
        displayName: "alamin",
        googleSign,
        setLoader,
        loader,
        setMyUser,
        myUser
    }
  return (
    <themeContext.Provider value={userInfo}>
      {
        children
      }
    </themeContext.Provider>
  )
}

export default MyProvider