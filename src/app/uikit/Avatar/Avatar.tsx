import Image, { StaticImageData } from "next/image";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string | StaticImageData;
  size?: number;
}

export const Avatar = ({ src, size = 40 }: AvatarProps) => {
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <Image src={src} fill alt="Avatar" className={styles.image} />
    </div>
  );
};
