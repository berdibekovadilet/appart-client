import React from "react";
import Image from "next/image";
import { recommendedCard } from "../../data";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import styles from "./Recommendation.module.scss";

const Recommendation = () => {
  return (
    <section className={styles.container}>
      <Title title="h2">Рекомендации</Title>
      <div className={styles.row}>
        {recommendedCard.map((item) => (
          <motion.div
            className={styles.card}
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.imgContainer}>
              <Image src={item.image} width="160" height="160" alt="card" />
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.shortDesc}>
              <div className={styles.room}>{item.room}</div>
              <div className={styles.square}>{item.square}</div>
              <div className={styles.floor}>{item.floor}</div>
            </div>
            <div className={styles.longDesc}>{item.longDesc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Recommendation;
