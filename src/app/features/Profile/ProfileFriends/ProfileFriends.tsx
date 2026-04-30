import Link from "next/link";
import styles from "./ProfileFriends.module.scss";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Avatar } from "@/app/uikit/Avatar/Avatar";
import { Friend } from "@/types";
import { useTranslations } from "next-intl";

interface ProfileFriendsProps {
  username: string;
  friends: Friend[];
}

const MAX_VISIBLE_FRIENDS = 3;

export const ProfileFriends = ({ username, friends }: ProfileFriendsProps) => {
  const t = useTranslations();

  return (
    <section className={styles.container}>
      <Link href={ROUTES.friends(username)} className={styles.titleLink}>
        <h3 className={styles.title}>{t("profileFriends.title")}</h3>
      </Link>
      <ul className={styles.friends}>
        {friends && friends.length > 0 ? (
          friends.slice(0, MAX_VISIBLE_FRIENDS).map((friend) => (
            <li key={friend.id} className={styles.friend}>
              <Avatar
                src={friend.avatar}
                size={40}
                isOnline={friend.isOnline}
              />
              <div className={styles.info}>
                <div className={styles.name}>{friend.name}</div>
                <div className={styles.breed}>{friend.breed}</div>
              </div>
            </li>
          ))
        ) : (
          <li className={styles.emptyFriends}>
            <p className={styles.text}>{t("profileFriends.empty")}</p>
          </li>
        )}
      </ul>
      <div className={styles.action}>
        <Link href={ROUTES.friends(username)} className={styles.showFriends}>
          {t("profileFriends.showFriends")}
        </Link>
      </div>
    </section>
  );
};
