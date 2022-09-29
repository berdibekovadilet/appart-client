import React from "react";
import Title from "../Title/Title";
import styles from "./VipCottages.module.scss";
import { vipCard } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";

const VipCottages = () => {
  return (
    <section className={styles.container}>
      <Title size="h2">Коттеджи</Title>
      <div className={styles.row}>
        {vipCard.map((item) => (
          <motion.div
            className={styles.item}
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.imgContainer}>
              <Image src={item.image} alt="stories" width="100%" height="100%" />
            </div>
            <p className={styles.description}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VipCottages;
