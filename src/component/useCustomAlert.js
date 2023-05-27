import { useAlert } from "react-alert";

const useCustomAlert = (message) => {
  const alert = useAlert();

  const showErrorAlert = () => {
    alert.error(message);
  };

  return {
    showErrorAlert,
  };
};

export default useCustomAlert;
