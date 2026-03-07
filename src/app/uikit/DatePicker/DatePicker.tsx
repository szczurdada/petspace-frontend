import { DayPicker } from "react-day-picker";
import styles from "./DatePicker.module.scss";
import { useState, useRef } from "react";
import { Input } from "../Input/Input";
import "react-day-picker/style.css";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

interface DatePickerProps {
  value: Dayjs | undefined;
  onChange: (date: Dayjs | undefined) => void;
  fromYear?: number;
  toYear?: number;
}

export const DatePicker = ({
  value,
  onChange,
  fromYear = 1924,
  toYear = 2026,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMouseDownOnDropdown = useRef(false);

  return (
    <div>
      <Input
        appearance="wide"
        placeholder="mm/dd/yyyy"
        readOnly
        value={value ? value.format("MM/DD/YYYY") : ""}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => {
          if (!isMouseDownOnDropdown.current) setIsOpen(false);
          isMouseDownOnDropdown.current = false;
        }}
      />
      {isOpen && (
        <div
          className={styles.dropdown}
          onMouseDown={() => {
            isMouseDownOnDropdown.current = true;
          }}
        >
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
          />
        </div>
      )}
    </div>
  );
};