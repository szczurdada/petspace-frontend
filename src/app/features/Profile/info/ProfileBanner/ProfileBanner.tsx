"use client";

import { useTranslations } from "next-intl";
import { Button } from "../../../../uikit/Button/Button";
import styles from "./ProfileBanner.module.scss";
import { FaPaw } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Link } from "../../../../uikit/Link/Link";
import { useRouter } from "next/navigation";
import { AvatarEdit } from "@/app/uikit/AvatarEdit/AvatarEdit";
import { useState } from "react";
import { MdPlace } from "react-icons/md";
import { ProfileInfoModal } from "../../modals/ProfileInfoModal/ProfileInfoModal";

interface ProfileBannerProps {
  avatar?: string;
  username: string;
  name: string;
  breed?: string;
  birthDate?: number;
  gender?: string;
  city?: string;
  bio?: string;
  interests?: {
    favoriteToys?: string;
    favoriteTreats?: string;
    favoriteActivities?: string;
    crimes?: string;
    guiltyHabits?: string;
    humans?: string;
  };
  friendsCount?: number;
  photosCount?: number;
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
  interests,
  friendsCount = 0,
  photosCount,
}: ProfileBannerProps) => {
  const t = useTranslations();
  const router = useRouter();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(avatar);
  const hasMoreInfo = !!(
    breed ||
    birthDate ||
    gender ||
    bio ||
    (interests && Object.values(interests).some(Boolean))
  );

  const editProfile = () => {
    router.push(ROUTES.editProfile(username));
  };

  return (
    <div className={styles.banner}>
      <div className={styles.avatarWrapper}>
        <AvatarEdit
          src={avatarUrl}
          size={140}
          onAvatarChange={(url) => setAvatarUrl(url)}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.username}>@{username} </div>
          </div>
          {(city || hasMoreInfo) && (
            <div className={styles.details}>
              {city && (
                <div className={styles.city}>
                  <MdPlace size={20} className={styles.detailsIcon} />
                  {city}
                </div>
              )}
              {hasMoreInfo && (
                <div
                  className={styles.moreInfo}
                  onClick={() => setIsInfoOpen(true)}
                >
                  {t("profileBanner.info")}
                </div>
              )}
            </div>
          )}
        </div>
        {bio && <div className={styles.bio}>{bio}</div>}
        <div className={styles.divider}></div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Link href={ROUTES.friends(username)} appearance="secondary">
              <FaPaw size={18} />
              <span className={styles.statValue}>{friendsCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.friends")}
              </span>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link href={ROUTES.photos(username)} appearance="secondary">
              <FaCamera size={18} />
              <span className={styles.statValue}>{photosCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.photos")}
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

      <ProfileInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        bio={bio}
        birthDate={birthDate}
        gender={gender}
        breed={breed}
        interests={interests}
      />
    </div>
  );
};
