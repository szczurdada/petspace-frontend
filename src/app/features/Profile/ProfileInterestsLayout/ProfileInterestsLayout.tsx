"use client";

import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import styles from "./ProfileInterestsLayout.module.scss";
import ProfileInformation from "../ProfileInformation/ProfileInformation";
import { ProfileInterests } from "../ProfileInterests/ProfileInterests";

interface ProfileInterestLayout {
  username: string;
  interests?: {
    favoriteToys?: string;
    favoriteTreats?: string;
    favoriteActivities?: string;
    crimes?: string;
    guiltyHabits?: string;
    humans?: string;
  };
}

export const ProfileInterestsLayout = ({
  username,
  interests,
}: ProfileInterestLayout) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar username={username} />
      </div>
      <div className={styles.main}>
        <ProfileInterests
          username={username}
          interests={interests}
        ></ProfileInterests>
      </div>
      <div className={styles.information}>
        <ProfileInformation username={username}></ProfileInformation>
      </div>
    </div>
  );
};
