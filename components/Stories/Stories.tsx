import Image from "next/image";
import React from "react";
import { storiesCard } from "../../data";
import styles from "./Stories.module.scss";

const Stories = () => {
  return (
    <div className={styles.container}>
      {storiesCard.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.imgContainer}>
            <Image src={item.image} alt="stories" width="104" height="104" />
          </div>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
