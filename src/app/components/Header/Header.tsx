import { Logo } from "../../uikit/Logo/Logo";
import styles from "./Header.module.scss";
import { Link } from "../../uikit/Link/Link";
import { ROUTES } from "@/app/uikit/constants/routes";
import { IoHomeSharp } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { BiSolidMessage } from "react-icons/bi";
import { SearchBar } from "../../uikit/SearchBar/SearchBar";

interface HeaderProps {
  username?: string;
}

export const Header = ({ username }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={ROUTES.feed} className={styles.logo}>
            <Logo />
            <span className={styles.logoTitle}>Petspace</span>
          </Link>
        </div>
        {username && (
          <>
            <SearchBar />
            <nav className={styles.actions}>
              <Link href={ROUTES.notifications} className={styles.iconLink}>
                <BsBellFill size={20} />
              </Link>
              <Link href={ROUTES.messages} className={styles.iconLink}>
                <BiSolidMessage size={20} />
              </Link>
              <Link href={ROUTES.profile(username)} className={styles.iconLink}>
                <IoHomeSharp size={20} />
              </Link>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};
