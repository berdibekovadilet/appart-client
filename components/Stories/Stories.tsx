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
      className={styles.carousel}
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className={styles.innerCarousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        animate={{ x: 0 }}
        initial={{ x: -200 }}
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
