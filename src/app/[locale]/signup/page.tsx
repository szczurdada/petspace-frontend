"use client";

import { SignUp } from "@/app/features/SignUp/SignUp";
import styles from "./page.module.scss";
import { Header } from "@/app/components/Header/Header";

export default function SignUpPage() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <SignUp />
    </div>
  );
}