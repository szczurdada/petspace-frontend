"use client";

import RegistrationSteps from "@/app/features/auth/RegistrationSteps/RegistrationSteps";
import styles from "./page.module.scss";

interface RegistrationStepsPageProps {
  username: string;
}

const RegistrationStepsPage = ({ username }: RegistrationStepsPageProps) => {
  return (
    <main className={styles.page}>
        <RegistrationSteps username={username} />
    </main>
  );
};

export default RegistrationStepsPage;