import Link from "next/link";
import styles from "./NavLink.module.scss";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
};
