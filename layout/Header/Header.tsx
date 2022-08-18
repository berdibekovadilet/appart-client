import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import { menuIcons } from "../../data";
import { IMenuIcons } from "../../data";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Appart.kg</div>
      <ul className={styles.menu}>
        {menuIcons.map((menu: IMenuIcons) => (
          <li key={menu.id}>
            <Image src={menu.icon} width={24} height={24} alt={menu.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
