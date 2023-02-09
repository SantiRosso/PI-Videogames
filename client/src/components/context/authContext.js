import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.js";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (currentUser) => {
        console.log("usuario creado:", currentUser);

        sendEmailVerification(currentUser.user).then(
          console.log("Email verified")
        );
      }
    );
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithFacebook = () => {
    const googleProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = () => {
    const googleProvider = new GithubAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        logout,
        user,
        loading,
        loginWithGoogle,
        loginWithFacebook,
        loginWithGithub,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
