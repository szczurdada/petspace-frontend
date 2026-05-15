import { useTranslations } from "next-intl";
import { FaLightbulb } from "react-icons/fa";
import styles from "./DailyTip.module.scss";

export const DailyTip = () => {
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <FaLightbulb size={16} className={styles.icon} />
        <h3 className={styles.title}>{t("dailyTip.title")}</h3>
      </div>
      <p className={styles.text}>{t("dailyTip.text")}</p>
    </div>
  );
};