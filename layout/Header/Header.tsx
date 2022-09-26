import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import { navbarIcons } from "../../data";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.logo}>Appart.kg</div>
        <ul className={styles.menu}>
          {navbarIcons.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>
                <Image src={item.icon} width={24} height={24} alt={item.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
