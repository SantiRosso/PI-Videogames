import { useModal } from "../../hooks/useModal";
import Modal from "./Modal.js";

const Modals = () => {
  const [isOpenModal1, OpenModal1, closeModal1] = useModal(false);
  const [isOpenModal2, OpenModal2, closeModal2] = useModal(false);

  return (
    <div className="div-login">
      <h5>User</h5>
      <div className="div-login-buttons">
        <button className="login-button" onClick={OpenModal1}>
          SignIn
        </button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <div className="modal-content">
            <form id="signin-form" className="form">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="login-email"
                placeholder="example@email.com"
                requided
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="login-password"
                placeholder="******"
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
        <button className="login-button" onClick={OpenModal2}>
          SignUp
        </button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <div className="modal-content">
            <form id="signup-form" className="form">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="signUp-email"
                placeholder="example@email.com"
                requided
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="signUp-password"
                placeholder="******"
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
        <button className="login-button" id="logout">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Modals;
