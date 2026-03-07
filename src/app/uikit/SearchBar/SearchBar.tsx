import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.scss";
import { useTranslations } from "next-intl";
import { Input } from "../Input/Input";

export const SearchBar = () => {
  const t = useTranslations();

  return (
    <search className={styles.searchWrapper} role="search">
      <FaSearch className={styles.searchIcon} />
      <Input
        type="search"
        placeholder={t("searchBar.search")}
        appearance="search"
      />
    </search>
  );
};
