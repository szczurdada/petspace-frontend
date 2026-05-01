import { Modal } from "@/app/uikit/Modal/Modal";
import Image, { StaticImageData } from "next/image";
import styles from "./PhotoModal.module.scss";
import { Photo } from "@/types";
import { Button } from "@/app/uikit/Button/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { Comment } from "../../Profile/feed/Comment/Comment";
import { CommentCreator } from "../../Profile/feed/CommentCreator/CommentCreator";
import { useRouter } from "next/navigation";
import { Avatar } from "@/app/uikit/Avatar/Avatar";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import "dayjs/locale/en";
import { DropdownMenu } from "@/app/uikit/DropdownMenu/DropdownMenu";
import api from "@/config/axios";
import { MdDeleteSweep, MdModeEdit } from "react-icons/md";

interface PhotoModalProps {
  photo: Photo | null;
  avatar?: string | StaticImageData;
  name: string;
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
  avatar,
  name,
  photosCount,
  currentIndex,
  cloudName,
  onClose,
  onPrev,
  onNext,
  onDelete,
}: PhotoModalProps) => {
  const t = useTranslations();
  const router = useRouter();

  const locale = useLocale();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") onPrev?.();
    if (e.key === "ArrowRight") onNext?.();
  };

  const deleteComment = async (commentId: string) => {
    await api.delete(`/comments/${commentId}`);
    router.refresh();
  };

  return (
    <Modal isOpen={photo !== null} onClose={onClose} className={styles.modal}>
      {photo && (
        <div
          className={styles.container}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          <div className={styles.photoWrapper}>
            <span className={styles.counter}>
              {t("photoModal.counter", {
                current: (currentIndex ?? 0) + 1,
                total: photosCount ?? 0,
              })}
            </span>
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
                style={{
                  objectFit: "cover",
                  filter: "blur(20px)",
                  opacity: 0.5,
                }}
              />

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

          <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <Avatar src={avatar}></Avatar>
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{name}</div>
                  <time className={styles.time}>
                    {dayjs(photo.createdAt).locale(locale).format("D MMM YYYY")}
                  </time>
                </div>
                <div className={styles.dropdown}>
                  <DropdownMenu
                    items={[
                      {
                        label: "Edit",
                        icon: <MdModeEdit size={20} />,
                        onClick: () => {},
                      },
                      {
                        label: "Delete",
                        icon: <MdDeleteSweep size={20} />,
                        onClick: () => {},
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <ul className={styles.comments}>
              {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((comment) => (
                  <li key={comment.id}>
                    <Comment
                      comment={comment}
                      onDelete={() => deleteComment(comment.id)}
                    />
                  </li>
                ))
              ) : (
                <div className={styles.emptyComments}>
                  <p className={styles.title}>
                    {t("photoModal.commentsTitle")}
                  </p>
                  <p className={styles.text}>{t("photoModal.commentsText")}</p>
                </div>
              )}
            </ul>
            <div className={styles.sidebarFooter}>
              <CommentCreator photoId={photo.id} avatar={avatar} />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
