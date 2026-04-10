import { Modal } from "@/app/uikit/Modal/Modal";
import Image from "next/image";
import styles from "./PhotoModal.module.scss";
import { Photo } from "@/types";
import { Button } from "@/app/uikit/Button/Button";
import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

interface PhotoModalProps {
  photo: Photo | null;
  photosCount?: number;
  currentIndex?: number;
  cloudName: string | undefined;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  onDelete?: () => void;
}

export const PhotoModal = ({
  photo,
  photosCount,
  currentIndex,
  cloudName,
  onClose,
  onPrev,
  onNext,
  onDelete,
}: PhotoModalProps) => {
  const t = useTranslations();

  return (
    <Modal isOpen={photo !== null} onClose={onClose} className={styles.modal}>
      {photo && (
        <div
          className={styles.container}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") onPrev?.();
            if (e.key === "ArrowRight") onNext?.();
          }}
          tabIndex={0}
          autoFocus
        >
          <Button appearance="ghost" className={styles.button}>
            {(currentIndex ?? 0) + 1} / {photosCount}
          </Button>
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
            <div className={styles.createdAt}>
              {photo.createdAt
                ? new Date(photo.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                  }) +
                  " · " +
                  new Date(photo.createdAt).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: false,
                  })
                : ""}
            </div>
            <div className={styles.actions}>
              {onDelete && (
                <Button appearance="ghost" onClick={onDelete}>
                  {t("photoModal.delete")}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
