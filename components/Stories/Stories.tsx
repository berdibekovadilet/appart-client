import Image from "next/image";
import React from "react";
import { storiesCard } from "../../data";
import styles from "./Stories.module.scss";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Stories = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLInputElement>(null);

  const { scrollX } = useScroll({
    container: carousel,
  });

  useEffect(() => {
    if (carousel?.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      className={styles.container}
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <motion.div
        className={styles.carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width * 1.5 }}
        dragElastic={0.2}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      >
        {storiesCard.map((item) => (
          <motion.div
            className={styles.item}
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.imgContainer}>
              <Image src={item.image} alt="stories" width="102" height="102" />
            </div>
            <p className={styles.description}>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Stories;
