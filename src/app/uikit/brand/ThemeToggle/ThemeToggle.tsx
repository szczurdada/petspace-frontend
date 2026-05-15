"use client";

import { useTheme } from "../../../hooks/useTheme";
import { Button } from "../../form/Button/Button";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();

  return (
    <Button appearance="ghost" onClick={toggle} className={className}>
      {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
    </Button>
  );
}
