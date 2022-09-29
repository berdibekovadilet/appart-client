import Image from "next/image";
import React from "react";
import { AvangardComplex } from "../../data";
import Title from "../Title/Title";
import styles from "./HousingComplexes.module.scss";
import { motion } from "framer-motion";

const HousingComplexes1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.complexContainer}>
        <Title size="h2">Жилые комплексы</Title>
        <Image
          src="/assets/housingComplexes/avangard/avangardLogo.svg"
          width="80"
          height="30"
          alt="logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.carousel}>
          {AvangardComplex.map((item) => (
            <motion.div
              className={styles.card}
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={styles.imgContainer}>
                <Image
                  src={item.image}
                  width="270"
                  height="170"
                  alt={item.title}
                />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.status}>{item.status}</p>
              <p className={styles.price}>{item.price}</p>
              <p className={styles.location}>{item.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousingComplexes1;
