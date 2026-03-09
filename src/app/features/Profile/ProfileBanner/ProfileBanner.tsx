"use client";

import { useTranslations } from "next-intl";
import { Button } from "../../../uikit/Button/Button";
import styles from "./ProfileBanner.module.scss";
import { FaBirthdayCake, FaPaw } from "react-icons/fa";
import { FaCamera, FaMars, FaVenus } from "react-icons/fa6";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Link } from "../../../uikit/Link/Link";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { AvatarEdit } from "@/app/uikit/AvatarEdit/AvatarEdit";
import dayjs from "dayjs";
import { useState } from "react";
import { Modal } from "@/app/uikit/Modal/Modal";
import { MdPlace } from "react-icons/md";

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
}: ProfileBannerProps) => {
  const t = useTranslations();
  const router = useRouter();
  const [isInfoOpen, setIsInfoOpen] = useState(false);

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
            <div className={styles.city}>
              <MdPlace size={20} className={styles.detailsIcon} />
              {city}
            </div>
            <div
              className={styles.moreInfo}
              onClick={() => setIsInfoOpen(true)}
            >
              {t("profileBanner.info")}
            </div>
          </div>
        </div>
        <div className={styles.bio}>{bio}</div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Link href={ROUTES.friends} appearance="secondary">
              <FaPaw size={18} />
              <span className={styles.statValue}>{friendsCount}</span>
              <span className={styles.statLabel}>
                {t("profileBanner.friends")}
              </span>
            </Link>
          </div>
          <div className={styles.stat}>
            <Link href={ROUTES.photos} appearance="secondary">
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

      <Modal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)}>
        <h3 className={styles.modalTitle}>{t("profileBanner.modalTitle")}</h3>
        <div className={styles.modalContainer}>
          {bio && <div className={styles.modalBio}>{bio}</div>}
          <div className={styles.modalRows}>
            {birthDate && (
              <div className={styles.modalRow}>
                <FaBirthdayCake size={16} className={styles.modalRowIcon} />
                <span>{dayjs(birthDate).format("D MMMM YYYY")}</span>
              </div>
            )}
            {gender === "female" && (
              <div className={styles.modalRow}>
                <FaVenus size={16} className={styles.modalRowIcon} />
                <span>{t("gender.female")}</span>
              </div>
            )}

            {gender === "male" && (
              <div className={styles.modalRow}>
                <FaMars size={16} className={styles.modalRowIcon} />
                <span>{t("gender.male")}</span>
              </div>
            )}

            {breed && (
              <div className={styles.modalRow}>
                <FaPaw size={16} className={styles.modalRowIcon} />
                <span>{breed}</span>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
