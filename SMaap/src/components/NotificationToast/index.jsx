import { toast } from "react-toastify";

const showErrorToast = (errorMessage) => {
  toast.error(errorMessage, {
    position: "top-right",
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

const showToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export { showToast, showErrorToast };
