import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  appearance: "primary" | "secondary" | "third" | "ghost";
  className?: string;
}

export const Button = ({ appearance, className, children, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      {...rest}
      className={cn(styles.default, className, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
        [styles.third]: appearance === "third",
        [styles.ghost]: appearance === "ghost",
      })}
    >
      {children}
    </button>
  );
};
