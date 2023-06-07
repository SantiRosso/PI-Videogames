import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal.js";
import { useAuth } from "../context/authContext.js";
import { showMessage } from "../../showMessage";
//styles
import s from "./LoginModals.module.css";

const Modals = () => {
  const {
    signup,
    login,
    logout,
    user,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
    resetPassword,
  } = useAuth();
  const navigate = useNavigate();

  //login

  const [isOpenModal1, OpenModal1, closeModal1] = useModal(false);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = await login(userLogin.email, userLogin.password);

      window.localStorage.setItem("token", credentials._tokenResponse.idToken);

      closeModal1();

      showMessage("Welcome " + userLogin.email, "success");

      navigate("/videogames");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        showMessage("Wrong password", "error");
      } else if (error.code === "auth/user-not-found") {
        showMessage("User not found", "error");
      } else {
        showMessage("Something went wrong", "error");
      }
    }
  };

  //register

  const [isOpenModal2, OpenModal2, closeModal2] = useModal(false);

  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });

  const handleChangeRegister = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const credentials = await signup(
        userRegister.email,
        userRegister.password
      );

      window.localStorage.setItem("token", credentials._tokenResponse.idToken);

      closeModal2();

      showMessage("Welcome " + userRegister.email, "success");

      navigate("/videogames");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        showMessage("Invalid email", "error");
      } else if (error.code === "auth/weak-password") {
        showMessage("Password is too weak", "error");
      } else if (error.code === "auth/email-already-in-use") {
        showMessage("Email already in use", "error");
      } else if (error.code) {
        showMessage("Something went wrong", "error");
      }
    }
  };

  //logout

  const handleLogout = async () => {
    await logout();
    window.localStorage.removeItem("token");
  };

  //google
  const handleGoogleLogin = async () => {
    try {
      const credentials = await loginWithGoogle();
      window.localStorage.setItem("token", credentials._tokenResponse.idToken);
      closeModal1();
      showMessage("Welcome " + credentials.user.displayName, "success");
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  //Facebook
  const handleFacebookLogin = async () => {
    try {
      const credentials = await loginWithFacebook();
      window.localStorage.setItem("token", credentials._tokenResponse.idToken);
      closeModal1();
      showMessage("Welcome " + credentials.user.displayName, "success");
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  //Github
  const handleGithubLogin = async () => {
    try {
      const credentials = await loginWithGithub();
      window.localStorage.setItem("token", credentials._tokenResponse.idToken);
      closeModal1();
      showMessage("Welcome " + credentials.user.displayName, "success");
    } catch (error) {
      showMessage(error.code, "error");
    }
  };

  //displayName
  let nameOrEmail = user?.displayName ? user?.displayName : user?.email;

  //handleResetPassword
  const handleResetPassword = async () => {
    if (!userLogin.email) {
      showMessage("Please, enter your email", "error");
    } else {
      try {
        await resetPassword(userLogin.email);
        showMessage("Check your email for a password reset link", "success");
      } catch (error) {
        showMessage(error.code, "error");
      }
    }
  };

  return (
    <div className="div-login">
      <h5>{user ? nameOrEmail : "User guest"}</h5>
      <div className="div-login-buttons">
        {/* Login */}
        <button
          id="logged-out"
          className="login-button"
          onClick={OpenModal1}
          hidden={user}
        >
          SignIn
        </button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <div className="modal-content">
            <form
              id="signin-form"
              className="form"
              onSubmit={handelSubmitLogin}
            >
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="login-email"
                placeholder="example@email.com"
                onChange={handleChangeLogin}
                requided
                className={s.input}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="login-password"
                placeholder="******"
                onChange={handleChangeLogin}
                requided
                className={s.input}
              />
              <button type="submit" className={s.buttonLogin}>
                LogIn
              </button>
            </form>

            <button
              type="button"
              id="googleLogin"
              onClick={handleGoogleLogin}
              className={s.buttonG}
            >
              Google
            </button>
            <button
              type="button"
              id="facebookLogin"
              onClick={handleFacebookLogin}
              className={s.buttonF}
            >
              Facebook
            </button>
            <button
              type="button"
              id="githubLogin"
              onClick={handleGithubLogin}
              className={s.buttonGit}
            >
              Github
            </button>
            <a href="#!" onClick={handleResetPassword}>
              Forgot your password?
            </a>
          </div>
        </Modal>
        {/* SignUp */}
        <button
          id="logged-out"
          className="login-button"
          onClick={OpenModal2}
          hidden={user}
        >
          SignUp
        </button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <div className="modal-content">
            <form
              id="signup-form"
              className="form"
              onSubmit={handelSubmitRegister}
            >
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="signUp-email"
                placeholder="example@email.com"
                onChange={handleChangeRegister}
                requided
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="signUp-password"
                placeholder="******"
                onChange={handleChangeRegister}
                requided
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </Modal>
        {/* LogOut */}
        <button
          id="logged-in"
          className="login-button"
          onClick={handleLogout}
          hidden={!user}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Modals;
