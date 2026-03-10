import { Modal } from "@/app/uikit/Modal/Modal";
import styles from "./ProfileInfoModal.module.scss";
import { FaBirthdayCake, FaMars, FaPaw, FaVenus } from "react-icons/fa";
import { useTranslations } from "next-intl";
import dayjs from "dayjs";

interface ProfileInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  breed?: string;
  birthDate?: number;
  gender?: string;
  bio?: string;
  interests?: {
    favoriteToys?: string;
    favoriteTreats?: string;
    favoriteActivities?: string;
    crimes?: string;
    guiltyHabits?: string;
    humans?: string;
  };
}

export const ProfileInfoModal = ({
  isOpen,
  onClose,
  breed,
  birthDate,
  gender,
  bio,
  interests,
}: ProfileInfoModalProps) => {
  const t = useTranslations();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className={styles.title}>{t("profileInfoModal.title")}</h3>
      <div className={styles.container}>
        {bio && <div className={styles.bio}>{bio}</div>}
        <div className={styles.rows}>
          {birthDate && (
            <div className={styles.row}>
              <FaBirthdayCake size={16} className={styles.icon} />
              <span>{dayjs(birthDate).format("D MMMM YYYY")}</span>
            </div>
          )}
          {gender === "female" && (
            <div className={styles.row}>
              <FaVenus size={16} className={styles.icon} />
              <span>{t("gender.female")}</span>
            </div>
          )}

          {gender === "male" && (
            <div className={styles.row}>
              <FaMars size={16} className={styles.icon} />
              <span>{t("gender.male")}</span>
            </div>
          )}

          {breed && (
            <div className={styles.row}>
              <FaPaw size={16} className={styles.icon} />
              <span>{breed}</span>
            </div>
          )}

          {interests && (
            <div className={styles.interests}>
              <h3 className={styles.interestsTitle}>{t("profileInfoModal.interestsTitle")}</h3>
              {interests.favoriteToys && (
                <div className={styles.interestItem}>
                  <div className={styles.interestLabel}>
                    {t("profileInterests.toys")}
                  </div>
                  <div className={styles.interestValue}>
                    {interests.favoriteToys}
                  </div>
                </div>
              )}
              {interests.favoriteTreats && (
                <div className={styles.interestItem}>
                  <div className={styles.interestLabel}>
                    {t("profileInterests.treats")}
                  </div>
                  <div className={styles.interestValue}>
                    {interests.favoriteTreats}
                  </div>
                </div>
              )}
              {interests.favoriteActivities && (
                <div className={styles.interestItem}>
                  <div className={styles.interestLabel}>
                    {t("profileInterests.activities")}
                  </div>
                  <div className={styles.interestValue}>
                    {interests.favoriteActivities}
                  </div>
                </div>
              )}
              {interests.crimes && (
                <div className={styles.interestItem}>
                  <div className={styles.interestLabel}>
                    {t("profileInterests.crimes")}
                  </div>
                  <div className={styles.interestValue}>{interests.crimes}</div>
                </div>
              )}
              {interests.guiltyHabits && (
                <div className={styles.interestItem}>
                  <div className={styles.interestLabel}>
                    {t("profileInterests.habits")}
                  </div>
                  <div className={styles.interestValue}>
                    {interests.guiltyHabits}
                  </div>
                </div>
              )}
              {interests.humans && (
                <div className={styles.interestItem}>
                  <div className={styles.interestLabel}>
                    {t("profileInterests.humans")}
                  </div>
                  <div className={styles.interestValue}>{interests.humans}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
