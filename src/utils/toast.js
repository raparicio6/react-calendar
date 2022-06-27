import { toast } from "react-toastify";

const TOAST_DEFAULT_OPTIONS = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const notifyError = (message) =>
  toast.error(message, TOAST_DEFAULT_OPTIONS);

export const notifySuccess = (message) =>
  toast.success(message, TOAST_DEFAULT_OPTIONS);
