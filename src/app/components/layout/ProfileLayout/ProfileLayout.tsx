import { Feed } from "../../profile/Feed/Feed";
import { FriendsWidget } from "../../profile/FriendsWidget/FriendsWidget";
import { PhotosWidget } from "../../profile/PhotosWidget/PhotosWidget";
import { PostCreator } from "../../profile/PostCreator/PostCreator";
import { ProfileBanner } from "../../profile/ProfileBanner/ProfileBanner";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./ProfileLayout.module.scss";

export const ProfileLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.profileBanner}>
        <ProfileBanner />
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
