import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebae.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {  // 'children' should be lowercase
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

  }
  const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logout=()=>{
    return signOut(auth).then(()=> setUser(null))
  }
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        if (currentUser) {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        }else{
            setLoading(false)
        }
    })
    return ()=>{
        return unsubscribe();
    }
  },[])

  const authInfo = {user, googleLogin,createUser, signIn,logout,loading,githubLogin};

  return (
    <AuthContext.Provider value={authInfo}>
      {children} 
    </AuthContext.Provider>
  );
};

export default AuthProvider;
