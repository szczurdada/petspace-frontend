import { ROUTES } from "@/app/uikit/constants/routes";
import styles from "./ProfilePhotos.module.scss";
import Image, { StaticImageData } from "next/image";
import { Link } from "@/app/uikit/Link/Link";
import { useTranslations } from "next-intl";

interface ProfilePhotosProps {
  photos: {
    img1: string | StaticImageData;
    img2: string | StaticImageData;
    img3: string | StaticImageData;
    img4: string | StaticImageData;
    img5: string | StaticImageData;
    img6: string | StaticImageData;
  };
}

export const ProfilePhotos = ({ photos }: ProfilePhotosProps) => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <Link href={ROUTES.photos} className={styles.titleLink}>
        <h3 className={styles.title}>{t("profiilePhotos.photos")}</h3>
      </Link>
      <div className={styles.gallery}>
        <div className={styles.photo}>
          <Image src={photos.img1} alt="Photo" fill />
        </div>
        <div className={styles.photo}>
          <Image src={photos.img2} alt="Photo" fill />
        </div>
        <div className={styles.photo}>
          <Image src={photos.img3} alt="Photo" fill />
        </div>
        <div className={styles.photo}>
          <Image src={photos.img4} alt="Photo" fill />
        </div>
        <div className={styles.photo}>
          <Image src={photos.img5} alt="Photo" fill />
        </div>
        <div className={styles.photo}>
          <Image src={photos.img6} alt="Photo" fill />
        </div>
      </div>
    </div>
  );
};
