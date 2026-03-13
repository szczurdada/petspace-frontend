import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import styles from "./PhotoGalleryLayout.module.scss";
import { StaticImageData } from "next/image";
import { PhotoGallery } from "../PhotoGallery/PhotoGallery";

interface PhotoGalleryLayoutProps {
  username: string;
  photos: {
    img1: string | StaticImageData;
    img2: string | StaticImageData;
    img3: string | StaticImageData;
    img4: string | StaticImageData;
    img5: string | StaticImageData;
    img6: string | StaticImageData;
  };
}

export const PhotoGalleryLayout = ({ username, photos }: PhotoGalleryLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar username={username} />
      </div>
      <div className={styles.main}>
        <PhotoGallery photos={photos} />
      </div>
    </div>
  );
};
