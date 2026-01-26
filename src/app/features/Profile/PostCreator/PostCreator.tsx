import { Input } from "@/app/uikit/Input/Input";
import styles from "./PostCreator.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { Avatar } from "@/app/uikit/Avatar/Avatar";
import { MOCK_PROFILE } from "@/app/uikit/constants/profile";
import { FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "@/app/uikit/Link/Link";
import { ROUTES } from "@/app/uikit/constants/routes";
import { useTranslations } from "next-intl";

export const PostCreator = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar src={MOCK_PROFILE.avatar} />
        </div>
        <div className={styles.inputWrapper}>
          <Input appearance="primary" placeholder={t("postCreator.placeholder")} />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.attachments}>
          <Link href={ROUTES.photos} className={styles.attachmentItem}>
            <FaCamera size={16} />
            {t("postCreator.photo")}
          </Link>
          <Link href={ROUTES.places} className={styles.attachmentItem}>
            <FaMapMarkerAlt size={16} />
            {t("postCreator.place")}
          </Link>
        </div>
        <Button appearance="primary">{t("postCreator.publish")}</Button>
      </div>
    </div>
  );
};