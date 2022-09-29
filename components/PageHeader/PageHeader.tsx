import React, { FC } from "react";
import Router from "next/router";
import styles from "./PageHeader.module.scss";
import Title from "../Title/Title";
import { LeftOutlined } from "@ant-design/icons";

interface PageHeaderProps {
  children: string;
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer} onClick={() => Router.back()}>
        <LeftOutlined />
      </div>
      <Title size="h2">{children}</Title>
    </div>
  );
};

export default PageHeader;
