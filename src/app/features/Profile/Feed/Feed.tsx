import { Post } from "@/app/components/Post/Post";
import styles from "./Feed.module.scss";

interface FeedProps {
  posts: Post[];
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </div>
  );
};

