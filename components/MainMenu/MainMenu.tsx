import React from "react";
import styles from "./MainMenu.module.scss";
import Image from "next/image";
import { menuIcons } from "../../data";
import { motion } from "framer-motion";

const MainMenu = () => {
  return (
    <div className={styles.container}>
      {menuIcons.map((item) => (
        <motion.div
          className={styles.menuCard}
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={item.icon} alt="menuIcon" width="62" height="62" />
          <h3 className={styles.desc}>{item.text}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default MainMenu;
