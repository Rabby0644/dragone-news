import { createContext, useEffect, useState } from "react";
import app from "../components/Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  const creatNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscrib();
    };
  }, []);

  const loginuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOut = () => {
     setLoading(true)
    return signOut(auth);
   
  };

  const updateUserProfile = (updatedData) => {

return updateProfile (auth.currentUser,updatedData)


  }





  const authInfo = {
    user,
    setUser,
    creatNewUser,
    singOut,
    loginuser,
    loading,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
