"use client";

import { Feed } from "../../../features/Profile/Feed/Feed";
import { ProfileFriends } from "../ProfileFriends/ProfileFriends";
import { PostCreator } from "../../../features/Profile/PostCreator/PostCreator";
import { ProfileBanner } from "../../../features/Profile/ProfileBanner/ProfileBanner";
import styles from "./ProfileLayout.module.scss";
import { MOCK_PHOTOS } from "@/app/uikit/constants/profile";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import { ProfilePhotos } from "../ProfilePhotos/ProfilePhotos";
import Avatar from "@/public/avatar.jpg";
import Avatar2 from "@/public/avatar2.jpg";
import postImage from "@/public/postImage.jpg";
import dayjs from "dayjs";
import { Post } from "@/app/components/Post/Post";
import { StaticImageData } from "next/image";

const posts: Post[] = [
  {
    id: "1",
    avatar: Avatar,
    username: "Vova",
    time: dayjs().format("DD.MM.YYYY"),
    text: "I hate Natasha",
    likes: 2174,
    comments: 5,
    reposts: 1,
  },
  {
    id: "2",
    avatar: Avatar2,
    username: "Natasha",
    time: dayjs().add(-5, "day").format("DD.MM.YYYY"),
    text: "I lova Vova",
    img: postImage,
    likes: 10,
    comments: 2,
    reposts: 4,
  },
];

interface ProfileLayoutProps {
  bannerInfo: {
    username: string;
    name: string;
    avatar?: string | StaticImageData;
    breed?: string;
    birthDate?: number;
    gender?: string;
    city?: string;
    bio?: string;
    interests?: string;
  };
}

export const ProfileLayout = ({ bannerInfo }: ProfileLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar username={bannerInfo.username} />
      </div>
      <div className={styles.profileBanner}>
        <ProfileBanner {...bannerInfo} />
      </div>
      <div className={styles.feedContainer}>
        <PostCreator />
        <Feed posts={posts} />
      </div>
      <div className={styles.photos}>
        <ProfilePhotos photos={MOCK_PHOTOS} />
      </div>
      <div className={styles.friends}>
        <ProfileFriends />
      </div>
    </div>
  );
};
