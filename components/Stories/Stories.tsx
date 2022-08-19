import React from "react";
import styles from "./Stories.module.scss";
import { storiesCard } from "../../data";
import { motion } from "framer-motion";
import Image from "next/image";

const Stories = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.carousel}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {storiesCard.map((item) => (
          <motion.div
            className={styles.item}
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.imgContainer}>
              <Image
                src={item.image}
                alt="stories"
                width="100%"
                height="100%"
              />
            </div>
            <p className={styles.description}>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stories;
