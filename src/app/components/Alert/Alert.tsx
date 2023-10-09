import React, { FC } from "react";
import styles from "./alert.module.css";
import { Button } from "..";
import { useBoundStore } from "@/app/store";

interface AlertProp {
  message: string;
}
const Alert: FC<AlertProp> = ({ message }) => {
  const alert = useBoundStore((state) => state.alert);
  const setAlert = useBoundStore((state) => state.setAlert);

  const handleDismiss = () => {
    setAlert(false);
  };

  return (
    <>
      {alert && (
        <div className={styles.alert} role="alert">
          <p className={styles.alert_message}>{message}</p>
          <Button
            type={"button"}
            style={styles.alert_button}
            content={<i className="ri-close-line"></i>}
            onClick={handleDismiss}
          />
        </div>
      )}
    </>
  );
};

export default Alert;
