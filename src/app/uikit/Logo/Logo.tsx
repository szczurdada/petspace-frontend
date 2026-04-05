import Image from "next/image";
import logoImage from "@/public/logo.svg";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Image
      src={logoImage}
      width={40}
      height={40}
      alt="logo PetSpace"
      className={styles.logo}
      priority
    />
  );
};
