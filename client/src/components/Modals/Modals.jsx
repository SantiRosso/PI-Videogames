import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)
  const [isOpenModal2, OpenModal2, closeModal2] = useModal(false)
  return (
    <div>
      <h2>Modals</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>contenido</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animal" />
      </Modal>
      {/* <button>Modal 2</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>contenido</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal> */}
    </div>
  );
};

export default Modals;
