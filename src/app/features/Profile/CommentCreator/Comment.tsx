import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./Comment.module.scss";
import { FaHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@/app/uikit/Button/Button";
import { Comment as CommentType } from "@/types";
import dayjs from "dayjs";

interface CommentProps {
  comment: CommentType;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.container}>
      <Avatar size={42} src={comment.user.avatar} />
      <div className={styles.info}>
        <div className={styles.header}>
          <span className={styles.name}>{comment.user.name}</span>
          <span className={styles.time}>
            {dayjs(comment.createdAt).format("D MMM YYYY")}
          </span>
        </div>
        <div className={styles.content}>{comment.content}</div>
        <div className={styles.footer}>
          <div className={styles.reply}>Reply</div>
          <div className={styles.likes}>
            <FaHeart size={14} />
            <span>{comment.likes}</span>
          </div>
        </div>
      </div>
      <div className={styles.delete}>
        <Button appearance="ghost" className={styles.deleteButton}>
          <IoCloseSharp size={20} />
        </Button>
      </div>
    </div>
  );
};
