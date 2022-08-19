import React from "react";
import styles from "./MainMenu.module.scss";
import Image from "next/image";
import { menuIcons } from "../../data";
import { motion } from "framer-motion";
import Title from "../Title/Title";

const MainMenu = () => {
  return (
    <section className={styles.container}>
      <Title title="h2">Главное меню</Title>
      <div className={styles.row}>
        {menuIcons.map((item) => (
          <motion.div
            className={styles.menuCard}
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={item.icon} alt="menuIcon" width="62" height="62" />
            <h4 className={styles.desc}>{item.text}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainMenu;
