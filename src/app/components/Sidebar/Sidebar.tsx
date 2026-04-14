import { useTranslations } from "next-intl";
import { BiSolidMessage } from "react-icons/bi";
import { FaMapMarkerAlt, FaPaw, FaBone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import styles from "./Sidebar.module.scss";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Button } from "@/app/uikit/Button/Button";
import { Link } from "@/app/uikit/Link/Link";
import { DailyTip } from "@/app/uikit/DailyTip/DailyTip";
import { IoHomeSharp } from "react-icons/io5";

export const Sidebar = ({ username }: { username: string }) => {
  const t = useTranslations();

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationList}>
        <Link href={ROUTES.profile(username)}>
          <Button appearance="secondary">
            <IoHomeSharp size={20} />
            {t("sidebar.profile")}
          </Button>
        </Link>
        <Link href={ROUTES.feed}>
          <Button appearance="secondary">
            <FaBone size={20} />
            {t("sidebar.feed")}
          </Button>
        </Link>
        <Link href={ROUTES.messages}>
          <Button appearance="secondary">
            <BiSolidMessage size={20} />
            {t("sidebar.messages")}
          </Button>
        </Link>
        <Link href={ROUTES.friends(username)}>
          <Button appearance="secondary">
            <FaPaw size={20} />
            {t("sidebar.friends")}
          </Button>
        </Link>
        <Link href={ROUTES.photos(username)}>
          <Button appearance="secondary">
            <FaCamera size={20} />
            {t("sidebar.photos")}
          </Button>
        </Link>
        <Link href={ROUTES.places}>
          <Button appearance="secondary">
            <FaMapMarkerAlt size={20} />
            {t("sidebar.places")}
          </Button>
        </Link>
      </div>
      <DailyTip />
    </nav>
  );
};
