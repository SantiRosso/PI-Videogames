import { useState } from "react";
import { showMessage } from "../showMessage.js";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => {
    setIsOpen(true);
    showMessage("Hello friend!", "success");
  };
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
