import ReactModal from "react-modal";

import styles from "./modal.module.scss";

const Modal = ({
  isOpen,
  onCloseModal,
  children,
  className,
  shouldCloseOnOverlayClick = true,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onCloseModal}
    overlayClassName={styles["react-modal"]}
    className={styles[className]}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);

export default Modal;
