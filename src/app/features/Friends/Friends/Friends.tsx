import { useTranslations } from "next-intl";
import styles from "./Friends.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { MdPlace } from "react-icons/md";
import { MOCK_FRIENDS } from "@/app/uikit/constants/profile";
import Image from "next/image";

export const Friends = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{t("friends.title")}</h1>
        <div className={styles.friendsCount}>{MOCK_FRIENDS.length}</div>
      </div>
      <div className={styles.list}>
        {MOCK_FRIENDS.map((friend) => (
          <div key={friend.id} className={styles.card}>
            <div className={styles.avatar}>
              <Image src={friend.avatar} alt={friend.name} fill />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{friend.name}</div>
              <div className={styles.breed}>{friend.breed}</div>
              <div className={styles.city}>
                <MdPlace size={20} className={styles.detailIcon} />
                {friend.city} · {friend.friendsCount} {t("friends.friends")}
              </div>
              <div className={styles.action}>
                <Button appearance="secondary">{t("friends.message")}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
