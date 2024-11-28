import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
// import router from "../utils/router";

export const authContext = createContext();


const AuthProvider = (props) => {
  console.log(props);

  const googleProvider = new GoogleAuthProvider();

  //state
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  //handle Register
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then(res => signOut(auth))
    // signOut(auth)
  };

  //Handle Login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google Login
  const handleGoogleLogin = () => {
   return signInWithPopup(auth, googleProvider);
  };

  //manage profile
  const manageProfile = (name,image) => {
   return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: image
    })
  }

  //handleLogout
  const handleLogout = () => {
    signOut(auth);
  };


  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading,
    setLoading

  }

  //useEffect onAuthstate change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       console.log(currentUser);
       if(currentUser){
        setUser(currentUser)
       }
       else{
        setUser(null)
       }
       setLoading(false)
       
    })

    //when unmounted this component it will stop observing
    return () => unsubscribe()
  },[])

  return (
    <div>
      <authContext.Provider value={authInfo}>
        {props.routes}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
