import { StaticImageData } from "next/image";
import styles from "./AvatarEdit.module.scss";
import { Button } from "../Button/Button";
import { MdDeleteSweep } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import { useTranslations } from "next-intl";
import defaultAvatar from "@/public/avatars/default.png";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { AvatarUpload } from "../AvatarUpload/AvatarUpload";

interface AvatarEditProps {
  src?: string | StaticImageData;
  size?: number;
}

export const AvatarEdit = ({ src, size }: AvatarEditProps) => {
  const t = useTranslations();
  const [file, setFile] = useState<File | null>(null);
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const savePhoto = async () => {
    try {
      if (!file) return;
      setIsChangeOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Avatar src={src ?? defaultAvatar} size={size} />
      </div>
      <div className={styles.overlay}>
        <Button appearance="secondary">
          <MdPhotoCamera size={20} />
          {t("avatarEdit.open")}
        </Button>
        <Button appearance="secondary" onClick={() => setIsChangeOpen(true)}>
          <MdModeEdit size={20} />
          {t("avatarEdit.change")}
        </Button>
        <Button appearance="secondary" onClick={() => setIsDeleteOpen(true)}>
          <MdDeleteSweep size={20} />
          {t("avatarEdit.delete")}
        </Button>
      </div>

      <Modal isOpen={isChangeOpen} onClose={() => setIsChangeOpen(false)}>
        <h3 className={styles.title}>{t("avatarEdit.modalTitle")}</h3>
        <p className={styles.description}>
          {t("avatarEdit.modalDescription")}
          <br />
          {t("avatarEdit.modalFormats")}
        </p>
        <div className={styles.upload}>
          <AvatarUpload onChange={setFile} />
        </div>
        <div className={styles.action}>
          <Button appearance="primary" onClick={savePhoto}>
            {t("common.saveAndContinue")}
          </Button>
        </div>
      </Modal>

      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <h3 className={styles.title}>{t("avatarEdit.deleteModalTitle")}</h3>
        <p className={styles.description}>
          {t("avatarEdit.deleteModalDescription")}
        </p>
        <div className={styles.action}>
          <Button appearance="secondary" onClick={() => setIsDeleteOpen(false)}>
            {t("common.cancel")}
          </Button>
          <Button appearance="primary">{t("avatarEdit.delete")}</Button>
        </div>
      </Modal>
    </div>
  );
};
