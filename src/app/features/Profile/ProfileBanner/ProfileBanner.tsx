import { useTranslations } from "next-intl";
import { Avatar } from "../../../uikit/Avatar/Avatar";
import { Button } from "../../../uikit/Button/Button";
import styles from "./ProfileBanner.module.scss";
import { FaCamera, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Link } from "../../../uikit/Link/Link";
import { StaticImageData } from "next/image";

interface ProfileBannerProps {
  avatar: string | StaticImageData;
  name: string;
  breed: string;
  age: string;
  city: string;
  description?: string;
  friendsCount?: number;
  photosCount?: number;
  placesCount?: number;
}

export const ProfileBanner = ({
  avatar,
  name,
  breed,
  age,
  city,
  description = "Description",
  friendsCount = 0,
  photosCount = 0,
  placesCount = 0,
}: ProfileBannerProps) => {
  const t = useTranslations();

  return (
    <div className={styles.banner}>
      <div className={styles.avatarWrapper}>
        <Avatar src={avatar} size={140} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.details}>
            <div className={styles.breed}>{breed}</div>
            <div className={styles.age}>{age}</div>
            <div className={styles.city}>{city}</div>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Link href={ROUTES.friends} appearance="secondary">
              <FaUserFriends size={16} />
              <span className={styles.statValue}>{friendsCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.friends")}
              </span>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link href={ROUTES.photos} appearance="secondary">
              <FaCamera size={16} />
              <span className={styles.statValue}>{photosCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.photos")}
              </span>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link href={ROUTES.places} appearance="secondary">
              <FaMapMarkerAlt size={16} />
              <span className={styles.statValue}>{placesCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.places")}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button appearance="primary" className={styles.achievementsBtn}>
          {t("profileBanner.achievements")}
        </Button>
        <Button appearance="secondary" className={styles.editBtn}>
          {t("profileBanner.editProfile")}
        </Button>
      </div>
    </div>
  );
};
