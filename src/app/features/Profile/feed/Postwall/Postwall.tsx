"use client";

import { Post } from "@/app/features/Profile/feed/Post/Post";
import styles from "./Postwall.module.scss";
import { Post as PostType } from "@/types";
import { useTranslations } from "next-intl";

interface PostwallProps {
  posts: PostType[];
}

export const Postwall = ({ posts }: PostwallProps) => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      {posts && posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div className={styles.emptyFeed}>
          <p className={styles.title}>{t("feed.title")}</p>
          <p className={styles.text}>{t("feed.text")}</p>
        </div>
      )}
    </div>
  );
};
