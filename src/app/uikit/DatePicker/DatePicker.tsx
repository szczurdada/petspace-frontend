import { DayPicker } from "react-day-picker";
import styles from "./DatePicker.module.scss";
import { useState } from "react";
import { Input } from "../Input/Input";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { pl } from "date-fns/locale";
import type { Dayjs } from "dayjs";

interface DatePickerProps {
  value: Dayjs | undefined;
  onChange: (date: Dayjs | undefined) => void;
  fromYear?: number;
  toYear?: number;
}

dayjs.locale("pl");

export const DatePicker = ({
  value,
  onChange,
  fromYear = 1924,
  toYear = 2026,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <Input
        appearance="wide"
        placeholder="D MMMM YYYY"
        readOnly
        value={value ? value.format("D MMMM YYYY") : ""}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className={styles.dropdown}>
          <DayPicker
            className={styles.picker}
            mode="single"
            selected={value?.toDate()}
            onSelect={(date) => {
              onChange(date ? dayjs(date) : undefined);
              setIsOpen(false);
            }}
            captionLayout="dropdown"
            fromYear={fromYear}
            toYear={toYear}
            locale={pl}
          />
        </div>
      )}
    </div>
  );
};
