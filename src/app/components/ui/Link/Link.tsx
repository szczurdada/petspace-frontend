import { AnchorHTMLAttributes } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import styles from "./Link.module.scss";
import NextLink from "next/link";
import cn from "classnames";

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps {
  appearance?: "primary" | "secondary";
}

export const Link = ({ appearance, children, ...rest }: LinkProps) => {
  return (
    <NextLink
      {...rest}
      className={cn(styles.default, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
      })}
    >
      {children}
    </NextLink>
  );
};
