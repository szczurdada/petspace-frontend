"use client";

import styles from "./AvatarEdit.module.scss";
import { Button } from "../Button/Button";
import { MdDeleteSweep, MdModeEdit, MdPhotoCamera } from "react-icons/md";
import { useTranslations } from "next-intl";
import defaultAvatar from "@/public/avatars/default.png";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL, CLOUD_NAME } from "@/config/env";
import { AvatarUploadModal } from "@/app/features/Profile/modals/AvatarUploadModal/AvatarUploadModal";
import { PhotoModal } from "@/app/features/Photos/PhotoModal/PhotoModal";
import { Photo } from "@/types";
import { useRouter } from "next/navigation";

interface AvatarEditProps {
  photo?: Photo;
  src?: string;
  size?: number;
  onAvatarChange?: (url: string) => void;
}

export const AvatarEdit = ({
  photo,
  src,
  size,
  onAvatarChange,
}: AvatarEditProps) => {
  const t = useTranslations();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const savePhoto = async () => {
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);

      const { data } = await axios.post(
        `${API_URL}/api/upload/avatar`,
        formData,
        {
          headers: { Authorization: localStorage.getItem("token") },
        },
      );

      onAvatarChange?.(data.data.url);
      setIsChangeOpen(false);
      router.refresh()
    } catch {
      toast.error(t("toasts.error"));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Avatar src={src ?? defaultAvatar} size={size} />
      </div>
      <div className={styles.overlay}>
        <Button appearance="secondary" onClick={() => setIsPhotoOpen(true)}>
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

      <PhotoModal
        photo={isPhotoOpen && photo ? photo : null}
        cloudName={CLOUD_NAME}
        onClose={() => setIsPhotoOpen(false)}
      />

      <Modal isOpen={isChangeOpen} onClose={() => setIsChangeOpen(false)}>
        <h3 className={styles.title}>{t("avatarEdit.modalTitle")}</h3>
        <p className={styles.description}>{t("avatarEdit.modalDescription")}</p>
        <p className={styles.hint}>{t("avatarEdit.modalFormats")}</p>
        <div className={styles.upload}>
          <AvatarUploadModal onChange={setFile} profileAvatar={src} />
        </div>
        <p className={styles.hint}>{t("avatarEdit.choosePhoto")}</p>
        <div className={styles.action}>
          <Button appearance="primary" onClick={savePhoto}>
            {t("common.saveAndContinue")}
          </Button>
        </div>
      </Modal>

      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <h3 className={styles.title}>{t("avatarEdit.deleteModalTitle")}</h3>
        <p className={styles.deleteDescription}>
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
