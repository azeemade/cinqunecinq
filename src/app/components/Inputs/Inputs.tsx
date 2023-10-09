import { ChangeEvent, FC } from "react";
import styles from "./inputs.module.css";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  id?: string;
  value: string | number;
  name?: string;
  placeholder?: string;
  style?: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  style,
  disabled,
  id,
  onChange,
}) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id={id}
        name={name}
        className={styles.input + " " + style}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {error && <p className="error text-sm">Input filed can't be empty!</p>}
    </>
  );
};

export default Inputs;
