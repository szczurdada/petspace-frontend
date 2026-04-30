import { useTranslations } from "next-intl";
import styles from "./Friends.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { MdPlace } from "react-icons/md";
import { MOCK_FRIENDS } from "@/app/uikit/constants/profile";
import Image from "next/image";

export const Friends = () => {
  const t = useTranslations();

  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{t("friends.title")}</h1>
        <span className={styles.count}>{MOCK_FRIENDS.length}</span>
      </div>
      <ul className={styles.list}>
        {MOCK_FRIENDS.map((friend) => (
          <li key={friend.id} className={styles.friend}>
            <div className={styles.avatar}>
              {friend.avatar && (
                <Image src={friend.avatar} alt={friend.name} fill />
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{friend.name}</div>
              <div className={styles.breed}>{friend.breed}</div>
              <div className={styles.city}>
                <MdPlace size={20} className={styles.icon}/>
                {friend.city}
              </div>
              <div className={styles.action}>
                <Button appearance="tertiary">{t("friends.message")}</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
