"use client";

import { Button } from "@/app/uikit/Button/Button";
import styles from "./PhotoGallery.module.scss";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { Photo } from "@/types";
import { useTranslations } from "next-intl";
import { PhotoModal } from "../PhotoModal/PhotoModal";
import { CLOUD_NAME, API_URL } from "@/config/env";
import { toast } from "react-toastify";
import { usePhotoNavigation } from "@/app/hooks/usePhotoNavigation";
import { PhotoUploadModal } from "../PhotoUploadModal/PhotoUploadModal";

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);
  const [localPhotos, setLocalPhotos] = useState<Photo[]>(photos);

  const { selectedIndex, setSelectedIndex, handlePrev, handleNext } =
    usePhotoNavigation(localPhotos);

  const addPhoto = async (files: File[]) => {
    try {
      const uploaded = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("image", file);
          const { data } = await axios.post(
            `${API_URL}/api/upload/photo`,
            formData,
            {
              headers: { Authorization: localStorage.getItem("token") },
            },
          );
          return {
            id: data.data._id,
            publicId: data.data.public_id,
            createdAt: data.data.createdAt,
          };
        }),
      );
      setLocalPhotos((prev) => [...prev, ...uploaded]);
      setIsOpen(false);
    } catch {
      toast.error(t("toasts.error"));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.galleryHeader}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{t("photoGallery.title")}</h3>
          <div className={styles.photosCount}>{localPhotos.length}</div>
        </div>

        <Button appearance="primary" onClick={() => setIsOpen(true)}>
          {t("photoGallery.addPhoto")}
        </Button>
      </div>

      <div className={styles.gallery}>
        {localPhotos.map((photo, index) => (
          <div key={photo.publicId} className={styles.photo}>
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
        currentIndex={selectedIndex ?? 0}
        photosCount={localPhotos.length}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <PhotoUploadModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onUpload={addPhoto}
      />
    </div>
  );
};
