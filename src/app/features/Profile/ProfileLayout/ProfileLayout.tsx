import { Feed } from "../../../features/Profile/Feed/Feed";
import { FriendsWidget } from "../../../features/Profile/ProfileFriends/FriendsWidget";
import { PhotosWidget } from "../../../features/Profile/ProfilePhotos/PhotosWidget";
import { PostCreator } from "../../../features/Profile/PostCreator/PostCreator";
import { ProfileBanner } from "../../../features/Profile/ProfileBanner/ProfileBanner";
import styles from "./ProfileLayout.module.scss";
import { MOCK_PROFILE } from "@/app/uikit/constants/profile";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";

export const ProfileLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.profileBanner}>
        <ProfileBanner {...MOCK_PROFILE} />
      </div>
      <div className={styles.postCreator}>
        <PostCreator />
      </div>
      <div className={styles.photos}>
        <PhotosWidget />
      </div>
      <div className={styles.feed}>
        <Feed />
      </div>
      <div className={styles.friends}>
        <FriendsWidget />
      </div>
    </div>
  );
};
