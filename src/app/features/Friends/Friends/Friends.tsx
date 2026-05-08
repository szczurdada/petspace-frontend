"use client";

import { useTranslations } from "next-intl";
import styles from "./Friends.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { MdPlace } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Friend } from "@/types";
import defaultAvatar from "@/public/avatars/default.png";

interface FriendsProps {
  friends?: Friend[];
}

export const Friends = ({ friends = [] }: FriendsProps) => {
  const t = useTranslations();

  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{t("friends.title")}</h1>
        <span className={styles.count}>{friends.length}</span>
      </div>
      <ul className={styles.list}>
        {friends.map((friend) => (
          <li key={friend.username} className={styles.friend}>
            <Link
              href={ROUTES.profile(friend.username)}
              className={styles.link}
            >
              <div className={styles.photo}>
                <Image
                  src={friend.avatar || defaultAvatar}
                  alt={friend.name}
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.overlay}>
                  <div className={styles.name}>{friend.name}</div>
                  {(friend.breed || friend.city) && (
                    <div className={styles.info}>
                      {friend.breed && <div>{friend.breed}</div>}
                      {friend.city && (
                        <div className={styles.city}>
                          <MdPlace size={14} />
                          {friend.city}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Link>
            <div className={styles.action}>
              <Button appearance="tertiary">{t("friends.message")}</Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
