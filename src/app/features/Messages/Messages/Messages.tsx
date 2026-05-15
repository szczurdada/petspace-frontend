"use client";

import { useState } from "react";
import styles from "./Messages.module.scss";
import { Avatar } from "@/app/uikit/user/Avatar/Avatar";
import { SubmitTextarea } from "@/app/uikit/form/SubmitTextarea/SumbitTextarea";
import { useTranslations } from "next-intl";

export const Messages = () => {
  const t = useTranslations();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setMessage("");
  };

  return (
    <section className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.user}>
          <Avatar size={45} />
          <div className={styles.info}>
            <strong className={styles.name}>Max</strong>
            <span className={styles.status}>Online</span>
          </div>
        </div>
      </div>
      <ul className={styles.list}></ul>
      <div className={styles.input}>
        <SubmitTextarea
          value={message}
          onChange={setMessage}
          onSubmit={handleSend}
          placeholder={t("messages.placeholder")}
        />
      </div>
    </section>
  );
};
