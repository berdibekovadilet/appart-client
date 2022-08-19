import React from "react";
import styles from "./ButtonPrimary.module.scss";
import Image from "next/image";
import { ButtonPrimaryProps } from "./ButtonButtonPrimary.props";

const ButtonPrimary = ({
  children,
  ...props
}: ButtonPrimaryProps): JSX.Element => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default ButtonPrimary;
