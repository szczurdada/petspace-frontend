import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "secondary" | "ghost";
}

export const Button = ({ appearance, children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(styles.default, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
        [styles.ghost]: appearance === "ghost",
      })}
    >
      {children}
    </button>
  );
};
