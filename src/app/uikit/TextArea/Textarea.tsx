import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";
import cn from "classnames";

interface TextareaProps extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  appearance?: "primary";
}

export const Textarea = ({ appearance, ...rest }: TextareaProps) => {
  return (
    <textarea
      {...rest}
      className={cn(styles.default, {
        [styles.primary]: appearance === "primary",
      })}
    ></textarea>
  );
};
