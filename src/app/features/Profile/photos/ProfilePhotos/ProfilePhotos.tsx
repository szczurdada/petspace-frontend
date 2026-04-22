import { ROUTES } from "@/app/uikit/constants/routes";
import styles from "./ProfilePhotos.module.scss";
import Image from "next/image";
import { Link } from "@/app/uikit/Link/Link";
import { useTranslations } from "next-intl";
import { Photo } from "@/types";
import { CLOUD_NAME } from "@/config/env";
import { usePhotoNavigation } from "@/app/hooks/usePhotoNavigation";
import { PhotoModal } from "@/app/features/Photos/PhotoModal/PhotoModal";

interface ProfilePhotosProps {
  photos: Photo[];
  username: string;
  avatar?: string;
  name: string;
}

const MAX_VISIBLE_PHOTOS = 6;

export const ProfilePhotos = ({
  photos,
  username,
  avatar,
  name
}: ProfilePhotosProps) => {
  const t = useTranslations();
  const { selectedIndex, setSelectedIndex, handlePrev, handleNext } =
    usePhotoNavigation(photos);

  return (
    <div className={styles.container}>
      <Link href={ROUTES.photos(username)} className={styles.titleLink}>
        <h3 className={styles.title}>{t("profilePhotos.title")}</h3>
      </Link>
      {photos.length === 0 ? (
        <div className={styles.empty}>{t("profilePhotos.empty")}</div>
      ) : (
        <div className={styles.gallery}>
          {photos.slice(0, MAX_VISIBLE_PHOTOS).map((photo, index) => (
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
      )}

      <PhotoModal
        photo={selectedIndex !== null ? photos[selectedIndex] : null}
        avatar={avatar}
        name={name}
        cloudName={CLOUD_NAME}
        currentIndex={selectedIndex ?? 0}
        photosCount={photos.length}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
