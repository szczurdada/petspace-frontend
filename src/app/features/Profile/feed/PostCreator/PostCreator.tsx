import { Input } from "@/app/uikit/Input/Input";
import styles from "./PostCreator.module.scss";
import { Button } from "@/app/uikit/Button/Button";
import { Avatar } from "@/app/uikit/Avatar/Avatar";
import { FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "@/app/uikit/Link/Link";
import { ROUTES } from "@/app/uikit/constants/routes";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { createPost } from "@/app/api/post";
import { useRouter } from "next/navigation";

interface PostCreatorProps {
  avatar?: string | StaticImageData;
  username: string;
  name: string;
  postwallId: string;
}

export const PostCreator = ({
  avatar,
  username,
  name,
  postwallId,
}: PostCreatorProps) => {
  const t = useTranslations();
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!content) return null;
    await createPost(content, postwallId);
    setContent("");
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar src={avatar} />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            appearance="primary"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t("postCreator.placeholder") + name + "?"}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.attachments}>
          <Link
            href={ROUTES.photos(username)}
            className={styles.attachmentItem}
          >
            <FaCamera size={16} />
            {t("postCreator.photo")}
          </Link>
          <Link href={ROUTES.places} className={styles.attachmentItem}>
            <FaMapMarkerAlt size={16} />
            {t("postCreator.place")}
          </Link>
        </div>
        <Button appearance="primary" onClick={handleSubmit}>
          {t("postCreator.publish")}
        </Button>
      </div>
    </div>
  );
};
