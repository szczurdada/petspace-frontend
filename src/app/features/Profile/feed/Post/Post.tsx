import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./Post.module.scss";
import Image from "next/image";
import { FaComment, FaHeart, FaReply } from "react-icons/fa";
import { Post as PostType } from "@/types";
import dayjs from "dayjs";
import { Button } from "@/app/uikit/Button/Button";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/env";
import axios from "axios";
import { Comment } from "@/app/features/Profile/feed/Comment/Comment";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { CommentCreator } from "../CommentCreator/CommentCreator";
import { useState } from "react";

export interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const router = useRouter();
  const [showCommentCreator, setShowCommentCreator] = useState((post.comments?.length ?? 0) > 0);

  const deletePost = async () => {
    await axios.delete(`${API_URL}/posts/${post.id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    router.refresh();
  };

  const deleteComment = async (commentId: string) => {
    await axios.delete(`${API_URL}/comments/${commentId}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    router.refresh();
  };

  const writeComment = () => {
    setShowCommentCreator((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <Avatar src={post.user.avatar} />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{post.user.name}</div>
          <div className={styles.time}>
            {dayjs(post.createdAt).format("D MMM YYYY")}
          </div>
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
            <Image
              src={post.image}
              alt="Post image"
              width={"100%"}
              height={400}
            ></Image>
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
      <div className={styles.comments}>
        {(post.comments ?? []).map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={() => deleteComment(comment.id)}
          />
        ))}
      </div>
      <div>
        {showCommentCreator && (
          <CommentCreator
            postId={post.id}
            avatar={post.user.avatar}
          ></CommentCreator>
        )}
      </div>
    </div>
  );
};
