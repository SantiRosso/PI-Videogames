import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal.js";
import { useAuth } from "../context/authContext.js";
import { showMessage } from "../../showMessage";

const Modals = () => {
  const { signup, login, logout, user } = useAuth();
  const history = useHistory();

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
      await login(userLogin.email, userLogin.password);

      closeModal1();

      showMessage("Welcome " + userLogin.email, "success");

      history.push("/videogames");
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
      await signup(userRegister.email, userRegister.password);

      closeModal2();

      showMessage("Welcome " + userRegister.email, "success");

      history.push("/videogames");
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
  };

  return (
    <div className="div-login">
      <h5>{user ? user.email : "User guest"}</h5>
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
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="login-password"
                placeholder="******"
                onChange={handleChangeLogin}
                requided
              />
              <button type="submit">LogIn</button>
            </form>

            <button type="button" id="googleLogin">
              Google
            </button>
            <button type="button" id="facebookLogin">
              Facebook
            </button>
            <button type="button" id="githubLogin">
              Github
            </button>
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
              {/* <label>Name:</label>
              <input />
              <label>Sex:</label>
              <input />
              <label>Age:</label>
              <input />
              <label>Image:</label>
              <input />
              <label>Country:</label>
              <input />
              <label>Favourite genre:</label>
              <input />
              <label>Favourite platform:</label>
              <input /> */}
              <button type="submit">Register</button>
            </form>

            <button type="button" id="googleLogin">
              Google
            </button>
            <button type="button" id="facebookLogin">
              Facebook
            </button>
            <button type="button" id="githubLogin">
              Github
            </button>
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
