import type React from "react";
import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  const { children, type = "button", ...rest } = props;

  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
