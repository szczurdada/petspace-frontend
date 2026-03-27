import { Modal } from "@/app/uikit/Modal/Modal";
import Image from "next/image";
import styles from "./PhotoModal.module.scss";
import { Photo } from "@/types";
import { Button } from "@/app/uikit/Button/Button";
import {
  FaAngleLeft,
  FaAngleRight,
  FaComment,
  FaHeart,
  FaReply,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

interface PhotoModalProps {
  photo: Photo | null;
  photosCount: number;
  currentIndex: number;
  cloudName: string | undefined;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const PhotoModal = ({
  photo,
  photosCount,
  currentIndex,
  cloudName,
  onClose,
  onPrev,
  onNext,
}: PhotoModalProps) => {
  const t = useTranslations();

  return (
    <Modal isOpen={photo !== null} onClose={onClose} className={styles.modal}>
      {photo && (
        <div className={styles.container}>
          <div className={styles.photoWrapper}>
            <Button
              className={styles.arrow}
              appearance="ghost"
              onClick={onPrev}
            >
              <FaAngleLeft size={40} />
            </Button>
            <div className={styles.photo}>
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/${photo.publicId}`}
                alt="Photo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <Button
              className={styles.arrow}
              appearance="ghost"
              onClick={onNext}
            >
              <FaAngleRight size={40} />
            </Button>
          </div>
          <div className={styles.footer}>
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
              <div className={styles.createdAt}>
                {photo.createdAt
                  ? new Date(photo.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    }) +
                    " at " +
                    new Date(photo.createdAt).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : ""}
              </div>
            </div>
            <div className={styles.actions}>
              <Button appearance="ghost">
                {t("photoModal.counter", {
                  current: currentIndex + 1,
                  total: photosCount,
                })}
              </Button>

              <Button appearance="ghost">{t("photoModal.delete")}</Button>
              <Button appearance="ghost">
                {t("photoModal.makeProfilePhoto")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
