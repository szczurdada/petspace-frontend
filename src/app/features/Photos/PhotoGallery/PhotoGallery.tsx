"use client";

import { Button } from "@/app/uikit/Button/Button";
import styles from "./PhotoGallery.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/app/uikit/Modal/Modal";
import { AvatarUploadModal } from "@/app/features/Profile/AvatarUploadModal/AvatarUploadModal";
import axios from "axios";
import { Photo } from "@/types";
import { useTranslations } from "next-intl";
import { PhotoModal } from "../PhotoModal/PhotoModal";
import { CLOUD_NAME, API_URL } from "@/config/env";
import { toast } from "react-toastify";
import { usePhotoNavigation } from "@/app/hooks/usePhotoNavigation";

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [localPhotos, setLocalPhotos] = useState<Photo[]>(photos);

  const { selectedIndex, setSelectedIndex, handlePrev, handleNext } =
    usePhotoNavigation(localPhotos);

  const addPhoto = async () => {
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        `${API_URL}/api/upload/photo`,
        formData,
        { headers: { Authorization: token } },
      );
      setLocalPhotos((prev) => [
        ...prev,
        { _id: data.data._id, publicId: data.data.public_id },
      ]);
      setIsOpen(false);
      setFile(null);
    } catch {
      toast.error(t("toast.error"));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.galleryHeader}>
        <h3 className={styles.title}>{t("photoGallery.title")}</h3>
        <Button appearance="primary" onClick={() => setIsOpen(true)}>
          {t("photoGallery.addPhoto")}
        </Button>
      </div>

      <div className={styles.gallery}>
        {localPhotos.map((photo, index) => (
          <div key={photo._id} className={styles.photo}>
            <Image
              onClick={() => setSelectedIndex(index)}
              src={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${photo.publicId}`}
              alt="Photo"
              fill
            />
          </div>
        ))}
      </div>

      <PhotoModal
        photo={selectedIndex !== null ? localPhotos[selectedIndex] : null}
        cloudName={CLOUD_NAME}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3 className={styles.modalTitle}>{t("photoGallery.addPhoto")}</h3>
        <AvatarUploadModal onChange={setFile} size={140} />
        <Button appearance="primary" onClick={addPhoto}>
          {t("common.upload")}
        </Button>
      </Modal>
    </div>
  );
};
