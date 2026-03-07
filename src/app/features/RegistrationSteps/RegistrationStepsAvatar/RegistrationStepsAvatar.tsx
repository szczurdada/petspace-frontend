"use client";

import styles from "./RegistrationStepsAvatar.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/uikit/constants/routes";
import { AvatarUpload } from "@/app/uikit/AvatarUpload/AvatarUpload";

export const RegistrationStepsAvatar = () => {
  const router = useRouter();
  const t = useTranslations();

  const saveAvatar = () => {
    const username = localStorage.getItem("username");
    if (!username) return;
    router.push(ROUTES.profile(username));
  };

  const returnToProfile = () => {
    const username = localStorage.getItem("username");
    if (!username) return;
    router.push(ROUTES.profile(username));
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.tag}>{t("registrationStepsAvatar.step")}</div>
      </div>
      <div>
        <h2 className={styles.title}>{t("registrationStepsAvatar.title")}</h2>
        <p className={styles.subtitle}>
          {t("registrationStepsAvatar.subtitle")}
        </p>
        <div className={styles.formDivider}></div>
      </div>
      <div className={styles.avatar}>
        <AvatarUpload size={120}></AvatarUpload>
      </div>
      <div className={styles.actions}>
        <Button appearance="primary" onClick={saveAvatar}>
          {t("common.continue")}
        </Button>
        <Button appearance="secondary" onClick={returnToProfile}>
          {t("common.skip")}
        </Button>
      </div>
    </div>
  );
};
