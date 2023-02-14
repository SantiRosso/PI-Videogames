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
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase.js";
import { showMessage } from "../../showMessage.js";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    let user;
    await createUserWithEmailAndPassword(auth, email, password).then(
      (currentUser) => {
        user = currentUser;

        sendEmailVerification(currentUser.user).then(
          showMessage("Verification email sent", "success")
        );
      }
    );
    return user;
  };

  const login = async (email, password) => {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
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

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
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
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
