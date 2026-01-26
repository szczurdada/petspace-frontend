import { Feed, Post } from "../../../features/Profile/Feed/Feed";
import { FriendsWidget } from "../../../features/Profile/ProfileFriends/FriendsWidget";
import { PostCreator } from "../../../features/Profile/PostCreator/PostCreator";
import { ProfileBanner } from "../../../features/Profile/ProfileBanner/ProfileBanner";
import styles from "./ProfileLayout.module.scss";
import { MOCK_PHOTOS, MOCK_PROFILE } from "@/app/uikit/constants/profile";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import { ProfilePhotos } from "../ProfilePhotos/ProfilePhotos";

import Avatar from "@/public/avatar.jpg";
import Avatar2 from "@/public/avatar2.jpg";
import postImage from "@/public/postImage.jpg";
import dayjs from "dayjs";

const posts: Post[] = [
  {
    id: "1",
    avatar: Avatar,
    name: "Vova",
    time: dayjs().format("DD.MM.YYYY"),
    text: "I hate Natasha",
    likes: 2174,
    comments: 5,
    reposts: 1,
  },
  {
    id: "2",
    avatar: Avatar2,
    name: "Natasha",
    time: dayjs().add(-5, "day").format("DD.MM.YYYY"),
    text: "I lova Vova",
    img: postImage,
    likes: 10,
    comments: 2,
    reposts: 4,
  },
];

export const ProfileLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.profileBanner}>
        <ProfileBanner {...MOCK_PROFILE} />
      </div>
      <div className={styles.feedContainer}>
        <PostCreator />
        <Feed posts={posts} />
      </div>
      <div className={styles.photos}>
        <ProfilePhotos photos={MOCK_PHOTOS} />
      </div>
      <div className={styles.friends}>
        <FriendsWidget />
      </div>
    </div>
  );
};