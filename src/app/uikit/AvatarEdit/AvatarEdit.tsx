import { StaticImageData } from "next/image";
import styles from "./AvatarEdit.module.scss";
import { Button } from "../Button/Button";
import { MdDeleteSweep } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import { useTranslations } from "next-intl";
import defaultAvatar from "@/public/avatars/default.png";
import { Avatar } from "../Avatar/Avatar";

interface AvatarEditProps {
  src?: string | StaticImageData;
  size?: number;
}

export const AvatarEdit = ({ src, size }: AvatarEditProps) => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Avatar src={src ?? defaultAvatar} size={size} />
      </div>
      <div className={styles.overlay}>
        <Button appearance="secondary">
          <MdPhotoCamera size={20} />
          {t("avatarEdit.open")}
        </Button>
        <Button appearance="secondary">
          <MdModeEdit size={20} />
          {t("avatarEdit.change")}
        </Button>
        <Button appearance="secondary">
          <MdDeleteSweep size={20} />
          {t("avatarEdit.delete")}
        </Button>
      </div>
    </div>
  );
};
