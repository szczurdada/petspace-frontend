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
import { BannerInfo } from "@/types";

interface ProfileBannerProps {
  bannerInfo: BannerInfo;
}

export const ProfileBanner = ({ bannerInfo }: ProfileBannerProps) => {
  const t = useTranslations();
  const router = useRouter();

  const friendsCount = bannerInfo.friends?.length ?? 0;
  const photosCount = bannerInfo.photos?.length ?? 0;

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    bannerInfo.avatar,
  );

  const hasMoreInfo = !!(
    bannerInfo.breed ||
    bannerInfo.birthDate ||
    bannerInfo.gender ||
    bannerInfo.bio ||
    (bannerInfo.interests && Object.values(bannerInfo.interests).some(Boolean))
  );

  const editProfile = () => {
    router.push(ROUTES.editProfile(bannerInfo.username));
  };

  return (
    <div className={styles.banner}>
      <div className={styles.avatarWrapper}>
        <AvatarEdit
          src={avatarUrl}
          name={bannerInfo.name}
          size={140}
          avatarPhotos={bannerInfo.avatarPhotos}
          onAvatarChange={(url) => setAvatarUrl(url)}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.nameWrapper}>
            <div className={styles.name}>{bannerInfo.name}</div>
            <div className={styles.username}>@{bannerInfo.username} </div>
          </div>
          {(bannerInfo.city || hasMoreInfo) && (
            <div className={styles.details}>
              {bannerInfo.city && (
                <div className={styles.city}>
                  <MdPlace size={20} className={styles.detailsIcon} />
                  {bannerInfo.city}
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
        {bannerInfo.bio && <div className={styles.bio}>{bannerInfo.bio}</div>}
        <div className={styles.divider}></div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Link
              href={ROUTES.friends(bannerInfo.username)}
              appearance="secondary"
            >
              <FaPaw size={18} />
              <span className={styles.statValue}>{friendsCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.friends")}
              </span>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link
              href={ROUTES.photos(bannerInfo.username)}
              appearance="secondary"
            >
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
          onClick={editProfile}
        >
          {t("profileBanner.editProfile")}
        </Button>
      </div>

      <ProfileInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        bio={bannerInfo.bio}
        birthDate={bannerInfo.birthDate}
        gender={bannerInfo.gender}
        breed={bannerInfo.breed}
        interests={bannerInfo.interests}
      />
    </div>
  );
};
