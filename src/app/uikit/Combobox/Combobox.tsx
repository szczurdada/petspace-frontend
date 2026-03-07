import { Input } from "../Input/Input";
import styles from "./Combobox.module.scss";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface ComboboxProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  options: string[];
  disabled?: boolean;
}

export const Combobox = ({
  value,
  placeholder,
  onChange,
  options,
  disabled,
}: ComboboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Input
          appearance="wide"
          value={value ?? ""}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <FaAngleDown
          className={styles.arrowIcon}
          size={20}
          onClick={() => setOpen(!open)}
        />
      </div>
        {open && (
          <ul className={styles.dropdown}>
            {options
              .filter((o) => o.toLowerCase().includes(value.toLowerCase()))
              .map((o) => (
                <li
                  key={o}
                  className={styles.option}
                  onMouseDown={() => {
                    onChange(o);
                    setOpen(false);
                  }}
                >
                  {o}
                </li>
              ))}
          </ul>
        )}
    </div>
  );
};
