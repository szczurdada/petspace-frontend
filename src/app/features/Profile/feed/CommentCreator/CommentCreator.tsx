import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./CommentCreator.module.scss";
import { Input } from "@/app/uikit/Input/Input";
import { FaAngleRight } from "react-icons/fa";

export const CommentCreator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar size={40}></Avatar>
        </div>
        <div className={styles.inputWrapper}>
          <Input appearance="primary" placeholder="Leave a comment" />
          <FaAngleRight size={30} className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};
