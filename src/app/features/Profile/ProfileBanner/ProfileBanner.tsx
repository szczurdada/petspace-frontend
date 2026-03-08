"use client";

import { useTranslations } from "next-intl";
import { Button } from "../../../uikit/Button/Button";
import styles from "./ProfileBanner.module.scss";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { FaCamera, FaMars, FaVenus } from "react-icons/fa6";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Link } from "../../../uikit/Link/Link";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { AvatarEdit } from "@/app/uikit/AvatarEdit/AvatarEdit";
import dayjs from "dayjs";

interface ProfileBannerProps {
  avatar?: string | StaticImageData;
  username: string;
  name: string;
  breed?: string;
  birthDate?: number;
  gender?: string;
  city?: string;
  bio?: string;
  friendsCount?: number;
  photosCount?: number;
  placesCount?: number;
}

export const ProfileBanner = ({
  avatar,
  username,
  name,
  breed,
  birthDate,
  gender,
  city,
  bio,
  friendsCount = 0,
  photosCount = 0,
  placesCount = 0,
}: ProfileBannerProps) => {
  const age = birthDate ? dayjs().diff(dayjs(birthDate), "year") : undefined;
  const t = useTranslations();
  const router = useRouter();

  const editProfile = () => {
    router.push(ROUTES.editProfile(username));
  };

  return (
    <div className={styles.banner}>
      <div className={styles.avatarWrapper}>
        <AvatarEdit src={avatar} size={140} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.username}>@{username} </div>
          </div>
          <div className={styles.details}>
            <div className={styles.gender}>
              {gender === "female" && <FaVenus size={16} />}
              {gender === "male" && <FaMars size={16} />}
            </div>
            <div className={styles.breed}>{breed}</div>
            <div className={styles.age}>
              {age} {t("profileBanner.age")}
            </div>
            <div className={styles.city}>{city}</div>
          </div>
        </div>
        <div className={styles.bio}>{bio}</div>
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
        <Button
          appearance="secondary"
          className={styles.editBtn}
          onClick={editProfile}
        >
          {t("profileBanner.editProfile")}
        </Button>
      </div>
    </div>
  );
};
