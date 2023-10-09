import styles from "./button.module.css";
import { MouseEvent } from "react";

type ButtonProps = {
  style: string;
  content: any;
  type: any;
  disabled?: boolean;
  onClick?: (e: MouseEvent<any>) => void;
};

const Button = (props: ButtonProps) => {
  const { style, content, onClick, type, disabled } = props;
  return (
    <button
      type={type}
      className={styles.button + " " + style}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
