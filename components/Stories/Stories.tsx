import Image from "next/image";
import React from "react";
import styles from "./Stories.module.scss";

const Stories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/stories/covers/1.webp"
            alt="stories"
            width={100}
            height={100}
          />
        </div>
        <p className={styles.description}>Lorem Ipsum akldkadlnaldn</p>
      </div>
    </div>
  );
};

export default Stories;
