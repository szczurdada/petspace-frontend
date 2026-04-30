import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./Comment.module.scss";
import { FaHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@/app/uikit/Button/Button";
import { Comment as CommentType } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import "dayjs/locale/en";

interface CommentProps {
  comment: CommentType;
  onDelete: () => void;
}

export const Comment = ({ comment, onDelete }: CommentProps) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <article className={styles.container}>
      <Avatar size={38} src={comment.user.avatar} />
      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.name}>{comment.user.name}</div>
          <time className={styles.time}>
            {dayjs(comment.createdAt).locale(locale).format("D MMM YYYY")}
          </time>
        </div>
        <div className={styles.content}>{comment.content}</div>
        <div className={styles.footer}>
          <div className={styles.reply}>{t("comment.reply")}</div>
          <div className={styles.likes}>
            <FaHeart size={14} />
            <span>{comment.likes}</span>
          </div>
        </div>
      </div>
      <div className={styles.delete}>
        <Button
          appearance="ghost"
          className={styles.deleteButton}
          onClick={onDelete}
        >
          <IoCloseSharp size={20} />
        </Button>
      </div>
    </article>
  );
};
