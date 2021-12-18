import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
