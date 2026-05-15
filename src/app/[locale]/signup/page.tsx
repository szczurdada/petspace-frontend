"use client";

import { SignUp } from "@/app/features/auth/SignUp/SignUp";
import styles from "./page.module.scss";
import { Header } from "@/app/components/Header/Header";

export default function SignUpPage() {
  return (
    <main className={styles.page}>
      <Header />
        <SignUp />
    </main>
  );
}