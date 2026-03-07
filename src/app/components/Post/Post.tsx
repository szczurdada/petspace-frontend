import { Avatar } from "@/app/uikit/Avatar/Avatar";
import styles from "./Post.module.scss";
import Image, { StaticImageData } from "next/image";
import { FaComment, FaHeart, FaReply} from "react-icons/fa";

export interface Post {
  id: string;
  avatar: string | StaticImageData;
  username: string;
  time: string;
  text?: string;
  img?: string | StaticImageData;
  likes: number;
  comments: number;
  reposts: number;
}

export interface PostProps {
  post: Post;
}

export const Post = ({ post }: PostProps) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar src={post.avatar} />
        </div>
        <div className={styles.info}>
          <div className={styles.username}>{post.username}</div>
          <div className={styles.time}>{post.time}</div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>{post.text}</div>
        {post.img && (
          <div className={styles.mediaContent}>
            <Image
              src={post.img}
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
        <div className={styles.stat}>
          <FaComment size={16} />
          <span>{post.comments}</span>
        </div>
        <div className={styles.stat}>
          <FaReply size={18} />
          <span>{post.reposts}</span>
        </div>
      </div>
    </div>
  );
};
