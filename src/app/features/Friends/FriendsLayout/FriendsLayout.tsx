import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import styles from "./FriendsLayout.module.scss";
import { Friends } from "../Friends/Friends";
import { FriendRequest } from "../FriendRequest/FriendRequest";
import { Friend } from "@/types";

interface FriendsLayoutProps {
  username: string;
  friends?: Friend[];
}

export const FriendsLayout = ({ username, friends }: FriendsLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar username={username} />
      </div>
      <div className={styles.content}>
        <Friends friends={friends} />
      </div>
      <div className={styles.requests}>
        <FriendRequest />
      </div>
    </div>
  );
};
