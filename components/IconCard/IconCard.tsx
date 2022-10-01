import React, { FC } from "react";
import Image from "next/image";
import styles from "./IconCard.module.scss";
import { ICreateObjectIcons } from "../../data";

const IconCard: FC<ICreateObjectIcons> = ({ title, icon, id }) => {
  return (
    <div className={styles.container} key={id}>
      <Image src={icon} alt="icon" width="24" height="24" />
      <p>{title}</p>
    </div>
  );
};

export default IconCard;
