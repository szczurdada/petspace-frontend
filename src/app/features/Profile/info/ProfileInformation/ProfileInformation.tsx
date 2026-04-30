"use client";

import styles from "./ProfileInformation.module.scss";
import { useTranslations } from "use-intl";
import { ROUTES } from "@/app/uikit/constants/routes";
import { NavLink } from "@/app/uikit/NavLink/NavLink";

interface ProfileInformationProps {
  username: string;
}

const ProfileInformation = ({ username }: ProfileInformationProps) => {
  const t = useTranslations();

  return (
    <nav className={styles.container}>
      <NavLink href={ROUTES.editProfile(username)}>
        {t("profileInformation.profile")}
      </NavLink>
      <NavLink href={ROUTES.editInterests(username)}>
        {t("profileInformation.interests")}
      </NavLink>
    </nav>
  );
};

export default ProfileInformation;
