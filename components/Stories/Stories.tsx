import Image from "next/image";
import React from "react";
import { storiesCard } from "../../data";
import styles from "./Stories.module.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Stories = () => {
  const [width, setWidth] = useState(0);
  //   const carousel = useRef();
  const carousel = React.createRef<HTMLDivElement>();

  useEffect(() => {
    console.log(
      carousel.current?.scrollWidth! - carousel.current?.offsetWidth!
    );
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, [carousel]);

  return (
    <motion.div
      className={styles.carousel}
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className={styles.innerCarousel}
        drag="x"
        dragConstraints={{ right: 0, left: -60 }}
      >
        {storiesCard.map((item) => (
          <motion.div className={styles.item} key={item.id}>
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
