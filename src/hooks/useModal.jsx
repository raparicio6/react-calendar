import React, { useState } from "react";

import Modal from "../components/Modal";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  const RenderModal = ({
    children,
    className,
    shouldCloseOnOverlayClick = true,
  }) => (
    <Modal
      isOpen={isVisible}
      onCloseModal={closeModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      className={className}
    >
      {children}
    </Modal>
  );

  return [openModal, closeModal, RenderModal];
};
