"use client";

import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import styles from "./MessagesLayout.module.scss";
import { MessagesList } from "../MessagesList/MessagesList";
import { Messages } from "../Messages/Messages";

interface Props {
  username: string;
}

export const MessagesLayout = ({ username }: Props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar username={username} />
      </div>
      <div className={styles.chat}>
        <MessagesList />
        <Messages />
      </div>
    </div>
  );
};