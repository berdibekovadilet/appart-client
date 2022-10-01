import Image from "next/image";
import React from "react";
import { AvangardComplex, IHouseComplex } from "../../data";
import Title from "../Title/Title";
import styles from "./HousingComplexes.module.scss";
import { motion } from "framer-motion";

const HousingComplexes = ({
  title,
  id,
  image,
  price,
  location,
  status,
}: IHouseComplex) => {
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
          <motion.div
            className={styles.card}
            key={id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.imgContainer}>
              <Image src={image} width="270" height="170" alt={title} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.status}>{status}</p>
            <p className={styles.price}>{price}</p>
            <p className={styles.location}>{location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HousingComplexes;
