import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import styles from "./FriendsLayout.module.scss";
import { Friends } from "../Friends/Friends";
import { FriendRequest } from "../FriendRequest/FriendRequest";

interface FriendsLayoutProps {
  username: string;
}

export const FriendsLayout = ({ username }: FriendsLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar username={username} />
      </div>
      <div className={styles.content}>
        <Friends />
      </div>
      <div className={styles.requests}>
        <FriendRequest />
      </div>
    </div>
  );
};
