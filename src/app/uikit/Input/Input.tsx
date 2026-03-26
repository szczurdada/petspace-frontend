import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  appearance: "primary" | "search" | "wide";
}

export const Input = ({ appearance, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={cn(styles.default, {
        [styles.primary]: appearance === "primary",
        [styles.search]: appearance === "search",
        [styles.wide]: appearance === "wide"
      })}
    />
  );
};
