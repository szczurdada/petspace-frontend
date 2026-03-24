import { Modal } from "@/app/uikit/Modal/Modal";
import Image from "next/image";
import styles from "./PhotoModal.module.scss";
import { Photo } from "@/types";
import { Button } from "@/app/uikit/Button/Button";
import { FaComment, FaHeart, FaReply } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface PhotoModalProps {
  photo: Photo | null;
  cloudName: string | undefined;
  onClose: () => void;
}

export const PhotoModal = ({ photo, cloudName, onClose }: PhotoModalProps) => {
  const t = useTranslations();

  return (
    <Modal isOpen={photo !== null} onClose={onClose}>
      {photo && (
        <div className={styles.container}>
          <div className={styles.photo}>
            <Image
              src={`https://res.cloudinary.com/${cloudName}/image/upload/${photo.publicId}`}
              alt="Photo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <FaHeart size={16} />
            </div>
            <div className={styles.stat}>
              <FaComment size={16} />
            </div>
            <div className={styles.stat}>
              <FaReply size={18} />
            </div>
          </div>
          <div className={styles.actions}>
            <Button appearance="ghost">{t("photoModal.delete")}</Button>
            <Button appearance="ghost">{t("photoModal.makeProfilePhoto")}</Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
