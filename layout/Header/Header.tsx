import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Appart.kg</div>
    </div>
  );
};

export default Header;
