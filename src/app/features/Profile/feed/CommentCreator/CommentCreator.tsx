import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./CommentCreator.module.scss";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { createComment } from "@/app/api/comment";
import { StaticImageData } from "next/image";
import { Textarea } from "@/app/uikit/Textarea/Textarea";

interface CommentCreatorProps {
  postId?: string;
  photoId?: string;
  avatar?: string | StaticImageData;
}

export const CommentCreator = ({
  postId,
  photoId,
  avatar,
}: CommentCreatorProps) => {
  const t = useTranslations();

  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!content) return null;
    await createComment(content, postId, photoId);
    setContent("");
    router.refresh();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Avatar size={38} src={avatar} />
        <div className={styles.textareaWrapper}>
          <Textarea
            appearance="secondary"
            value={content}
            onKeyDown={handleKeyDown}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t("commentCreator.placeholder")}
          />
          <FaAngleRight
            size={30}
            className={styles.arrow}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
