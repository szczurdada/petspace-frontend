"use client";

import { Postwall } from "../feed/Postwall/Postwall";
import { ProfileFriends } from "../ProfileFriends/ProfileFriends";
import { PostCreator } from "../feed/PostCreator/PostCreator";
import { ProfileBanner } from "../info/ProfileBanner/ProfileBanner";
import styles from "./ProfileLayout.module.scss";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import { BannerInfo } from "@/types";
import { MOCK_FRIENDS } from "@/app/uikit/constants/profile";
import { ProfilePhotos } from "../photos/ProfilePhotos/ProfilePhotos";

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
        <ProfileBanner bannerInfo={bannerInfo} />
      </div>
      <div className={styles.feedContainer}>
        <PostCreator
          username={bannerInfo.username}
          name={bannerInfo.name}
          avatar={bannerInfo.avatar}
          postwallId={bannerInfo.postwallId ?? ""}
        />
        <Postwall posts={bannerInfo.posts ?? []} />
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.photos}>
          <ProfilePhotos
            username={bannerInfo.username}
            photos={bannerInfo.photos ?? []}
            avatar={bannerInfo.avatar}
            name={bannerInfo.name}
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
