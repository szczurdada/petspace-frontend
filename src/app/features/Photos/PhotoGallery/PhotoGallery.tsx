import styles from "./PhotoGallery.module.scss";
import Image, { StaticImageData } from "next/image";

interface PhotoGalleryProps  {
  photos: {
    img1: string | StaticImageData;
    img2: string | StaticImageData;
    img3: string | StaticImageData;
    img4: string | StaticImageData;
    img5: string | StaticImageData;
    img6: string | StaticImageData;
  };
}

export const PhotoGallery = ({photos}: PhotoGalleryProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My photos</h3>
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
