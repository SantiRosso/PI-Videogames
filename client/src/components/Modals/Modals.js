import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, OpenModal1, closeModal1] = useModal(false);
  const [isOpenModal2, OpenModal2, closeModal2] = useModal(false);
  return (
    <div className="div-login">
      <h5>User</h5>
      <div className="div-login-buttons">
        <button onClick={OpenModal1}>SignIn</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal 1</h3>
          <p>contenido</p>
          <img src="https://placeimg.com/400/400/animals" alt="Animal" />
        </Modal>
        <button onClick={OpenModal2}>SignUp</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h3>Modal 2</h3>
          <p>contenido</p>
          <img src="https://placeimg.com/400/400/nature" alt="Nature" />
        </Modal>
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default Modals;
