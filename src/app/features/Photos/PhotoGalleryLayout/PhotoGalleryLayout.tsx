import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import styles from "./PhotoGalleryLayout.module.scss";
import { PhotoGallery } from "../PhotoGallery/PhotoGallery";
import { Photo } from "@/types";

interface PhotoGalleryLayoutProps {
  username: string;
  photos: Photo[];
}

export const PhotoGalleryLayout = ({
  username,
  photos,
}: PhotoGalleryLayoutProps) => {
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