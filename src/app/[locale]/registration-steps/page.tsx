"use client";

import RegistrationSteps from "@/app/features/RegistrationSteps/RegistrationSteps";

interface RegistrationStepsPageProps {
  username: string;
}

const RegistrationStepsPage = ({ username }: RegistrationStepsPageProps) => {
  return <RegistrationSteps username={username}></RegistrationSteps>;
};

export default RegistrationStepsPage;
