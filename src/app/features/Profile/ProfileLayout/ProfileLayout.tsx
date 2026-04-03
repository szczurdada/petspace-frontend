"use client";

import { Feed } from "../../../features/Profile/Feed/Feed";
import { ProfileFriends } from "../ProfileFriends/ProfileFriends";
import { PostCreator } from "../../../features/Profile/PostCreator/PostCreator";
import { ProfileBanner } from "../../../features/Profile/ProfileBanner/ProfileBanner";
import styles from "./ProfileLayout.module.scss";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import { ProfilePhotos } from "../ProfilePhotos/ProfilePhotos";
import { BannerInfo } from "@/types";
import { MOCK_FRIENDS, MOCK_POSTS } from "@/app/uikit/constants/profile";

interface ProfileLayoutProps {
  bannerInfo: BannerInfo;
}

export const ProfileLayout = ({ bannerInfo }: ProfileLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar username={bannerInfo.username} />
      </div>
      <div className={styles.profileBanner}>
        <ProfileBanner
          {...bannerInfo}
          photosCount={bannerInfo.photos?.length ?? 0}
        />
      </div>
      <div className={styles.feedContainer}>
        <PostCreator
          username={bannerInfo.username}
          name={bannerInfo.name}
          avatar={bannerInfo.avatar}
        />
        <Feed posts={MOCK_POSTS} />
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.photos}>
          <ProfilePhotos
            username={bannerInfo.username}
            photos={bannerInfo.photos ?? []}
          />
        </div>
        <div className={styles.friends}>
          <ProfileFriends
            username={bannerInfo.username}
            friends={bannerInfo.friends ?? MOCK_FRIENDS}
          />
        </div>
      </div>
    </div>
  );
};
