"use client";

import { SignUp } from "@/app/features/SignUp/SignUp";
import styles from "./page.module.scss";

export default function SignUpPage() {
  return (
    <div className={styles.page}>
      <SignUp />
    </div>
  );
}