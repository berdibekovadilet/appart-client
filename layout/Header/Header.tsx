import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import { navbarIcons } from "../../data";

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.logo}>Appart.kg</div>
        <ul className={styles.menu}>
          {navbarIcons.map((item) => (
            <li key={item.id}>
              <Image src={item.icon} width={24} height={24} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
