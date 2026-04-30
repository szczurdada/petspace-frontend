import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./Post.module.scss";
import Image from "next/image";
import { FaComment, FaHeart, FaReply } from "react-icons/fa";
import { Post as PostType } from "@/types";
import dayjs from "dayjs";
import { Button } from "@/app/uikit/Button/Button";
import { useRouter } from "next/navigation";
import { Comment } from "@/app/features/Profile/feed/Comment/Comment";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { CommentCreator } from "../CommentCreator/CommentCreator";
import { useState } from "react";
import { useLocale } from "next-intl";
import "dayjs/locale/pl";
import "dayjs/locale/en";
import api from "@/config/axios";

export interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const router = useRouter();
  const [showCommentCreator, setShowCommentCreator] = useState(
    (post.comments?.length ?? 0) > 0,
  );
  const locale = useLocale();

  const deletePost = async () => {
    await api.delete(`/posts/${post.id}`);
    router.refresh();
  };

  const deleteComment = async (commentId: string) => {
    await api.delete(`/comments/${commentId}`);
    router.refresh();
  };

  const writeComment = () => {
    setShowCommentCreator((prev) => !prev);
  };

  return (
    <article>
      <div className={styles.wrapper}>
        <Avatar src={post.user.avatar} />
        <div className={styles.info}>
          <div className={styles.name}>{post.user.name}</div>
          <time className={styles.time}>
            {dayjs(post.createdAt).locale(locale).format("D MMM YYYY")}
          </time>
        </div>
        <div className={styles.delete}>
          <Button
            appearance="ghost"
            className={styles.deleteButton}
            onClick={deletePost}
          >
            <MdOutlineMoreHoriz size={25} />
          </Button>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>{post.content}</div>
        {post.image && (
          <div className={styles.mediaContent}>
            <Image src={post.image} alt="Post image" fill></Image>
          </div>
        )}
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <FaHeart size={16} />
          <span>{post.likes}</span>
        </div>
        <div className={styles.stat} onClick={writeComment}>
          <FaComment size={16} />
          <span>{post.comments?.length || null}</span>
        </div>
        <div className={styles.stat}>
          <FaReply size={18} />
          <span>{post.reposts}</span>
        </div>
      </div>
      <ul className={styles.comments}>
        {(post.comments ?? []).map((comment) => (
          <li key={comment.id}>
            <Comment
              comment={comment}
              onDelete={() => deleteComment(comment.id)}
            />
          </li>
        ))}
      </ul>
      {showCommentCreator && (
        <CommentCreator
          postId={post.id}
          avatar={post.user.avatar}
        ></CommentCreator>
      )}
    </article>
  );
};
