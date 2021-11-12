import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
const { overlay } = styles;

function Modal({ closeModal, modalImg }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={overlay}>
      <img src={`https://image.tmdb.org/t/p/w780${modalImg}`} />
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};

export default Modal;
