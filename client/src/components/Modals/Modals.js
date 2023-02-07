import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal.js";
import { useAuth } from "../context/authContext.js";
import { showMessage } from "../../showMessage";

const Modals = () => {
  const { signup, login, logout } = useAuth();

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

  const handelSubmitLogin = (e) => {
    e.preventDefault();
    login(userLogin.email, userLogin.password);
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
      showMessage("Welcome " + userRegister.email, "success");
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

  return (
    <div className="div-login">
      <h5>User</h5>
      <div className="div-login-buttons">
        {/* Login */}
        <button id="logged-out" className="login-button" onClick={OpenModal1}>
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
        <button id="logged-out" className="login-button" onClick={OpenModal2}>
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
          onClick={() => logout()}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Modals;
