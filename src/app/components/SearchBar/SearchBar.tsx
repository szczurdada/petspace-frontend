import { Input } from "../ui/Input/Input";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <search className={styles.searchWrapper} role="search">
      <Search className={styles.searchIcon} />
      <Input type="search" placeholder="Search" appearance="search" />
    </search>
  );
};
