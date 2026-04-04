"use client";

import SignIn from "@/app/features/SignIn/SignIn";
import styles from "./page.module.scss";

export default function SignInPage() {
  return (
    <div className={styles.page}>
      <SignIn />
    </div>
  );
}