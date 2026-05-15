"use client";

import { useTranslations } from "next-intl";
import styles from "./MessagesList.module.scss";
import { SearchBar } from "@/app/uikit/navigation/SearchBar/SearchBar";

export const MessagesList = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <h2 className={styles.title}>{t("messages.title")}</h2>
        <SearchBar />
      </div>
      <div className={styles.list}></div>
    </div>
  );
};
