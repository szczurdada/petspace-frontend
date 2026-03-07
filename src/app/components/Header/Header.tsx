import { Button } from "../../uikit/Button/Button";
import { Logo } from "../../uikit/Logo/Logo";
import styles from "./Header.module.scss";
import { Link } from "../../uikit/Link/Link";
import { ROUTES } from "@/app/uikit/constants/routes";
import { IoHomeSharp } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { BiSolidMessage } from "react-icons/bi";
import { SearchBar } from "../../uikit/SearchBar/SearchBar";

export const Header = ({ username }: { username: string }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={ROUTES.feed} className={styles.logo}>
            <Logo />
            <h1 className={styles.logoTitle}>Petspace</h1>
          </Link>
        </div>
        <SearchBar />
        <nav className={styles.actions}>
          <Link href={ROUTES.notifications}>
            <Button appearance="ghost">
              <BsBellFill size={20} />
            </Button>
          </Link>
          <Link href={ROUTES.messages}>
            <Button appearance="ghost">
              <BiSolidMessage size={20} />
            </Button>
          </Link>
          <Link href={ROUTES.profile(username)}>
            <Button appearance="ghost">
              <IoHomeSharp size={20} />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
