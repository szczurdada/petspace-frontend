"use client";

import { Button } from "@/app/uikit/Button/Button";
import styles from "./ProfileInformation.module.scss";
import { useTranslations } from "use-intl";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/uikit/constants/routes";

interface ProfileInformationProps {
  username: string;
}

const ProfileInformation = ({ username }: ProfileInformationProps) => {
  const t = useTranslations();
  const router = useRouter();

  const goToInterests = () => {
    router.push(ROUTES.editInterests(username));
  };

  const goToEditProfile = () => {
    router.push(ROUTES.editProfile(username));
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Button appearance="third" onClick={goToEditProfile}>{t("profileInformation.profile")}</Button>
        <Button appearance="third" onClick={goToInterests}>
          {t("profileInformation.interests")}
        </Button>
      </div>
    </div>
  );
};

export default ProfileInformation;
