"use client";
import { ProfileEditor } from "../ProfileEditor/ProfileEditor";
import styles from "./ProfileEditorLayout.module.scss";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import ProfileInformation from "../ProfileInformation/ProfileInformation";
import { StaticImageData } from "next/image";

interface ProfileEditorLayoutProps {
  avatar?: string | StaticImageData;
  name: string;
  username: string;
  bio?: string;
  gender?: string;
  birthDate?: number;
  country?: string;
  city?: string;
  breed?: string;
}

export const ProfileEditorLayout = ({
  avatar,
  name,
  username,
  gender,
  bio,
  birthDate,
  country,
  city,
  breed,
}: ProfileEditorLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar username={username} />
      </div>
      <div className={styles.main}>
        <ProfileEditor
          avatar={avatar}
          bio={bio}
          name={name}
          username={username}
          gender={gender}
          birthDate={birthDate}
          country={country}
          city={city}
          breed={breed}
        />
      </div>
      <div className={styles.information}>
        <ProfileInformation username={username}></ProfileInformation>
      </div>
    </div>
  );
};
