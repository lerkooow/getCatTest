import type { ReactNode } from "react";

import s from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  disabled: boolean;
  handleClick: () => void;
};

export const Button = ({ children, disabled, handleClick }: ButtonProps) => {
  return (
    <button className={s.button} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};
