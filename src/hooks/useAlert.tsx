import { useState } from "react";

export interface IAlert {
  text: string;
  type: string;
  show: boolean;
}
const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });
  const showAlert = ({ text, type = "danger" }: IAlert) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });
  return { alert, showAlert, hideAlert };
};

export default useAlert;
