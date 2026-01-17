import { Link } from "../Link/Link";
import { ROUTES } from "@/app/shared/constants/routes";
import Image from "next/image";
import logoImage from "@/public/logo.png";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href={ROUTES.feed}>
      <Image
        src={logoImage}
        width={40}
        height={40}
        alt="logo PetSpace"
        className={styles.logo}
        priority
      />
    </Link>
  );
};
