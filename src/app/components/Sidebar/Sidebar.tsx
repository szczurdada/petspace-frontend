import { useTranslations } from "next-intl";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalPostOffice, MdOutlineMessage } from "react-icons/md";
import {
  FaUserFriends,
  FaHeart,
  FaMapMarkerAlt,
  FaCamera,
} from "react-icons/fa";
import styles from "./Sidebar.module.scss";
import { ROUTES } from "@/app/uikit/constants/routes";
import { Button } from "@/app/uikit/Button/Button";
import { Link } from "@/app/uikit/Link/Link";
import { DailyTip } from "@/app/uikit/DailyTip/DailyTip";

export const Sidebar = () => {
  const t = useTranslations();

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationList}>
        <Link href={ROUTES.profile}>
          <Button appearance="secondary">
            <CgProfile size={20} />
            {t("sidebar.profile")}
          </Button>
        </Link>
        <Link href={ROUTES.feed}>
          <Button appearance="secondary">
            <MdOutlineLocalPostOffice size={20} />
            {t("sidebar.feed")}
          </Button>
        </Link>
        <Link href={ROUTES.messages}>
          <Button appearance="secondary">
            <MdOutlineMessage size={20} />
            {t("sidebar.messages")}
          </Button>
        </Link>
        <Link href={ROUTES.friends}>
          <Button appearance="secondary">
            <FaUserFriends size={20} />
            {t("sidebar.friends")}
          </Button>
        </Link>
        <Link href={ROUTES.photos}>
          <Button appearance="secondary">
            <FaCamera size={20} />
            {t("sidebar.photos")}
          </Button>
        </Link>
        <Link href={ROUTES.favorites}>
          <Button appearance="secondary">
            <FaHeart size={20} />
            {t("sidebar.favorites")}
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
