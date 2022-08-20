import React from "react";
import styles from "./ButtonPrimary.module.scss";
import Image from "next/image";
import { ButtonPrimaryProps } from "./ButtonButtonPrimary.props";
import { motion } from "framer-motion";

const ButtonPrimary = ({
  children,
  ...props
}: ButtonPrimaryProps): JSX.Element => {
  return (
    <motion.div
      className={styles.container}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <button className={styles.primary} {...props}>
        {children}
        <div className={styles.iconContainer}>
          <Image
            src="/assets/componentIcons/plus.svg"
            width="24"
            height="24"
            alt="icon"
          />
        </div>
      </button>
    </motion.div>
  );
};

export default ButtonPrimary;
