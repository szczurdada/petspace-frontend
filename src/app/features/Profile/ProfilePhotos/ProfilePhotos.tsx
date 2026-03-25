import { ROUTES } from "@/app/uikit/constants/routes";
import styles from "./ProfilePhotos.module.scss";
import Image from "next/image";
import { Link } from "@/app/uikit/Link/Link";
import { useTranslations } from "next-intl";
import { Photo } from "@/types";
import { CLOUD_NAME } from "@/config/env";
import { PhotoModal } from "../../Photos/PhotoModal/PhotoModal";
import { usePhotoNavigation } from "@/app/hooks/usePhotoNavigation";

interface ProfilePhotosProps {
  photos: Photo[];
  username: string;
}

export const ProfilePhotos = ({ photos, username }: ProfilePhotosProps) => {
  const t = useTranslations();
  const { selectedIndex, setSelectedIndex, handlePrev, handleNext } =
    usePhotoNavigation(photos);

  return (
    <div className={styles.container}>
      <Link href={ROUTES.photos(username)} className={styles.titleLink}>
        <h3 className={styles.title}>{t("profilePhotos.photos")}</h3>
      </Link>
      <div className={styles.gallery}>
        {photos.slice(0, 6).map((photo, index) => (
          <div key={photo.publicId} className={styles.photo}>
            <Image
              onClick={() => setSelectedIndex(index)}
              src={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${photo.publicId}`}
              alt="Photo"
              fill
            />
          </div>
        ))}
        <PhotoModal
          photo={selectedIndex !== null ? photos[selectedIndex] : null}
          cloudName={CLOUD_NAME}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};
