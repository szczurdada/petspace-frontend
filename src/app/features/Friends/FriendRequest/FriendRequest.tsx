"use client";

import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./FriendRequest.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { useTranslations } from "next-intl";

export const FriendRequest = () => {
  const t = useTranslations();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t("friendRequest.title")}</h2>
      <div className={styles.friendRequest}>
        <div className={styles.avatar}>
          <Avatar size={50} />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.name}>Buddy</div>
            <div className={styles.breed}>Bulldog</div>
            <div className={styles.mutualFriends}>
              {t("friendRequest.mutualFriends", { count: 5 })}
            </div>
          </div>
          <div className={styles.actions}>
            <Button appearance="primary">{t("friendRequest.accept")}</Button>
            <Button appearance="tertiary">{t("friendRequest.decline")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
