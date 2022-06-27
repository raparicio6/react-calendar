import ReactModal from "react-modal";

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
    overlayClassName="react-modal"
    className={className}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);

export default Modal;
