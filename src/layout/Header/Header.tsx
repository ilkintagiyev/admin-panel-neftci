import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome, Admin</h1>
      <button className={styles.logout}>Logout</button>
    </header>
  );
};

export default Header;