import { Bell, Home, MessageCircle } from "lucide-react";
import { SearchBar } from "../../SearchBar/SearchBar";
import { Button } from "../../ui/Button/Button";
import { Logo } from "../../ui/Logo/Logo";
import styles from "./Header.module.scss";
import { Link } from "../../ui/Link/Link";
import { ROUTES } from "@/app/shared/constants/routes";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <SearchBar />
        <nav className={styles.actions}>
          <Link href={ROUTES.profile}>
            <Button appearance="ghost">
              <Home size={24} />
            </Button>
          </Link>
          <Link href={ROUTES.notifications}>
            <Button appearance="ghost">
              <Bell size={24} />
            </Button>
          </Link>
          <Link href={ROUTES.messages}>
            <Button appearance="ghost">
              <MessageCircle size={24} />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
