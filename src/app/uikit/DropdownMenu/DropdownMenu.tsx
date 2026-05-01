import React from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import styles from "./DropdownMenu.module.scss";
import { Button } from "../Button/Button";

interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

interface DropdownMenuProps {
  items: DropdownItem[];
}

export const DropdownMenu = ({ items }: DropdownMenuProps) => {
  return (
    <div className={styles.wrapper}>
      <Button appearance="ghost" className={styles.trigger}>
        <MdOutlineMoreHoriz size={25} />
      </Button>
      <ul className={styles.dropdown}>
        {items.map((item) => (
          <li key={item.label}>
            <Button
              appearance="secondary"
              className={styles.item}
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
