import React from "react";
import { useRef } from "react";
import styles from "./ScrollHor.module.scss";

const ScrollHor = () => {
  const ref = useRef(null);
  return (
    <div className={styles.container}>
      <ul ref={ref} className={styles.list}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </ul>
    </div>
  );
};

export default ScrollHor;
