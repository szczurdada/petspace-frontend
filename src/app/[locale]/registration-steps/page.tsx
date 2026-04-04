"use client";

import RegistrationSteps from "@/app/features/RegistrationSteps/RegistrationSteps";
import styles from "./page.module.scss";

interface RegistrationStepsPageProps {
  username: string;
}

const RegistrationStepsPage = ({ username }: RegistrationStepsPageProps) => {
  return (
    <div className={styles.page}>
      <RegistrationSteps username={username} />
    </div>
  );
};

export default RegistrationStepsPage;