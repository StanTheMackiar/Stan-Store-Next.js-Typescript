import React from "react";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import styles from "../../../../styles/Header.module.scss"
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";

const LeftSection = (): JSX.Element => {
  return (
    <section className={styles.containerLeft}>
      <div className={styles.toggle}>
        <ToggleMenu />
      </div>

      <div className={styles.title}>
        <Link href="/">
          <a className={styles.link}>
            <h1>{"Stan's Store"}</h1>
          </a>
        </Link>
      </div>

      <div className={styles.searchBar}>
        <SearchBar/>
      </div>
    </section>
  );
};

export default LeftSection;
